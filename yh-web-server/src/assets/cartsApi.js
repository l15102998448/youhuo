import {CARTSURL} from "../common/AjaxUrls"
import Api from "../common/Api"

export default {
  /**
   * 获取购物车信息
   * @param url
   * @param cb
   */
  getCartsInfo(cb) {
    Api.get(CARTSURL, cb)
  }

}
