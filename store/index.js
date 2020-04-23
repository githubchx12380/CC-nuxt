export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.todos.themeStyle = !state.todos.themeStyle
  }
}