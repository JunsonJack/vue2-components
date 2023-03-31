
// 节流
// 方式一：通过定时器  
export function throttle1(func, delay) {
    let timer
    return function () {
        let context = this
        let args = arguments
        if (timer) {
            return
        }
        timer = setTimeout(function () {
            func.apply(context, args)
            timer = null
        }, delay)
    }

}

// 方式二：计算时间戳
export function throttle2(func, delay) {
    console.log('触发了了节流2')

    let pre = 0
    return function () {
        let now = new Date()
        if (now - pre > delay) {
            func()
            pre = now
        }
    }
}

// 防抖：触发事件-setTimeout-clearTimeout
export function debounce(func, delay) {
    console.log('触发了防抖')

    let timer
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            func.apply(context, args)
        }, delay)
    }
}