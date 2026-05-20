const SELECTOR_FAQ = '[data-faq]'
const SELECTOR_ITEM = '[data-faq-item]'
const SELECTOR_TRIGGER = '[data-faq-trigger]'
const SELECTOR_BODY = '[data-faq-body]'

const CLASS_OPEN = 'is-open'

class FaqTab {
    constructor(element) {
        this._element = element
        this._init()
    }

    _init() {
        this._element
            .querySelectorAll(SELECTOR_TRIGGER)
            .forEach((trigger) => {
                trigger.addEventListener('click', (event) =>
                    this._onTriggerClick(event)
                )
            })
    }

    _onTriggerClick(event) {
        const trigger = event.currentTarget
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true'

        const parentSelector = trigger.dataset.faqParent
        if (parentSelector) {
            const parent = document.querySelector(parentSelector)
            if (parent) {
                parent
                    .querySelectorAll(
                        `${SELECTOR_TRIGGER}[aria-expanded="true"]`
                    )
                    .forEach((openTrigger) => {
                        if (openTrigger !== trigger) {
                            this._close(openTrigger)
                        }
                    })
            }
        }

        isExpanded ? this._close(trigger) : this._open(trigger)
    }

    _open(trigger) {
        const body = this._getBody(trigger)
        if (!body) return

        trigger.setAttribute('aria-expanded', 'true')
        body.style.maxHeight = body.scrollHeight + 'px'
        body.classList.add(CLASS_OPEN)
    }

    _close(trigger) {
        const body = this._getBody(trigger)
        if (!body) return

        trigger.setAttribute('aria-expanded', 'false')
        body.style.maxHeight = '0'
        body.classList.remove(CLASS_OPEN)
    }

    _getBody(trigger) {
        const bodyId = trigger.getAttribute('aria-controls')
        return bodyId ? document.getElementById(bodyId) : null
    }

    static init(root = document) {
        root.querySelectorAll(SELECTOR_FAQ).forEach(
            (element) => new FaqTab(element)
        )
    }
}

export default FaqTab
