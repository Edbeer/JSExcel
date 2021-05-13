import { $ } from "../../core/dom"

export function resizeHandler($root, event) {
    const $resize = $(event.target)
    const $parent = $resize.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const type = $resize.data.resize
    const sideProp = type === 'col' ? 'bottom' : 'right'
    let value

    $resize.css({
      opacity: 1,
      [sideProp]: '-5000px'
    })
    //console.log($parent.getCoords())
    //console.log($coords.right)
    //console.log(event.pageX)

    document.onmousemove = e => {
      if (type === 'col') {
        const delta = e.pageX - coords.right  // e.pageX - координаты мышки
        value = coords.width + delta
        $resize.css({
          right: -delta + 'px',
          //bottom: '-5000px'
        })

        //$parent.css({width: value + 'px'})
        //cells.forEach(el => el.style.width = value + 'px')
      } else {
        const delta = e.pageY - coords.bottom
        value = coords.height + delta
        $resize.css({
          bottom: -delta + 'px',
          //right: '-5000px'
        })
        //$parent.css({height: value + 'px'})
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null

      if (type === 'col') {
        $parent.css({ width: value + 'px' })
        $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px')
      } else {
        $parent.css({ height: value + 'px' })
      }

      $resize.css({
        opacity: 0,
        right: 0,
        bottom: 0
      })
    }
}