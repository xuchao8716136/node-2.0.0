/**
 * Created by Administrator on 2016/12/21.
 */
const STORAGE_KEY = 'ITEMS';
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}
