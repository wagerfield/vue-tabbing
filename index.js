function install(Vue, options) {
  if (install.installed) return
  install.installed = true

  var opts = Object.assign({
    className: "tabbing"
  }, options)

  var vm = new Vue({
    data: {
      tabbing: false
    }
  })

  if (typeof Vue.prototype.$tabbing === "undefined") {
    Object.defineProperty(Vue.prototype, "$tabbing", {
      get: function() {
        return vm.tabbing
      }
    })
  }

  if (typeof window !== "undefined") {
    var html = document.documentElement

    function handleKeyDown(event) {
      if (event.keyCode === 9) {
        if (opts.className) html.classList.add(opts.className)
        window.removeEventListener("keydown", handleKeyDown)
        window.addEventListener("mousedown", handleMouseDown)
        vm.tabbing = true
      }
    }

    function handleMouseDown() {
      if (opts.className) html.classList.remove(opts.className)
      window.removeEventListener("mousedown", handleMouseDown)
      window.addEventListener("keydown", handleKeyDown)
      vm.tabbing = false
    }

    window.addEventListener("keydown", handleKeyDown)
  }
}

module.exports = {
  install: install
}
