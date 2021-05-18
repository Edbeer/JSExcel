export class Tableselection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    // $el instanceof DOM === true
    select($el) {
        this.clear()
        this.group.push($el)
        $el.focus().addClass(Tableselection.className)
        this.current = $el
    }

    clear() {
        this.group.forEach($el => $el.removeClass(Tableselection.className))
        this.group = []
    }

    selectGroup($group = []) {
        this.clear()

        this.group = $group
        this.group.forEach($el => $el.addClass(Tableselection.className))
    }
}