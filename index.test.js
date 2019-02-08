const { createLocalVue, mount } = require("@vue/test-utils")
const VueTabbing = require("./index")

const localVue = createLocalVue()

localVue.use(VueTabbing)

test(name, () => {
  const wrapper = mount({
    template: "<a href='#'>Link</a>",
  }, {
    localVue
  })

  expect(wrapper.isVueInstance()).toBeTruthy()
})
