import {CLASSIFYURL} from "../common/AjaxUrls";
import Api from "../common/Api";

export default {
  /**
   * 获取分类信息
   * @param url
   * @param cb
   */
  getClassifyInfo(cb){
    Api.get(CLASSIFYURL,cb)
  }

}
