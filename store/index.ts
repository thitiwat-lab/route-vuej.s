import { createStore } from "vuex";
import {
  EPawnPathName,
  EPawnPathNameOf,
  EReportPathName,
  EThaiReportsTicketPathName,
} from "@/_helpers/types";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

export const SystemPath = {
  login: { path: "login", name: "login" },
  home: { path: "home", name: "home", title: "หน้าหลัก" },
  user: { path: "user", name: "user", title: "กำหนดสิทธิ์" },
  userNew: { path: "user/new", name: "user-new" },
  userEdit: { path: "user/:id", name: "user-edit" },
  passwordChange: {
    path: "password-change/:id",
    name: "password-change",
    title: "เปลี่ยนรหัสผ่าน",
  },
  settingsBranch: {
    path: "settings/branch",
    name: "setting-branch",
    title: "ข้อกำหนด",
  },
  settingsBranchNew: {
    path: "settings/branch/new",
    name: "setting-branch-new",
  },
  settingsBranchEdit: {
    path: `settings/branch/:branchId`,
    name: "setting-branch-edit",
  },
  settingsInterest: {
    path: "settings/interest",
    name: "settings-interest",
    title: "ดอกเบี้ย",
  },
  settingsInterestNew: {
    path: "settings/interest/:type/new",
    name: "settings-interest-new",
  },
  settingsInterestEdit: {
    path: "settings/interest/:type/:interestId",
    name: "settings-interest-edit",
  },
  settingsAssetType: {
    path: "settings/asset-type",
    name: "setting-asset-type",
    title: "ประเภททรัพย์จำนำ",
  },
  settingsNationality: {
    path: "settings/nationality",
    name: "setting-nationality",
    title: "สัญชาติ",
  },
  settingsAssetGroup: {
    path: "settings/asset-group",
    name: "setting-asset-group",
    title: "จัดลำดับกลุ่มประเภททรัพย์",
  },
  settingsBrand: {
    path: "settings/brand",
    name: "setting-brand",
    title: "ยี่ห้อทรัพย์จำนำ",
  },
  settingsModel: {
    path: "settings/model",
    name: "setting-model",
    title: "รุ่นทรัพย์จำนำ",
  },
  settingsUnit: {
    path: "settings/unit",
    name: "setting-unit",
    title: "หน่วยนับ",
  },
  settingsHoliday: {
    path: "settings/holiday",
    name: "setting-holiday",
    title: "วันหยุดประจำปี",
  },
  searchTicket: {
    path: "search-ticket",
    name: "search-ticket",
    title: "ส่วนค้นหา",
  },
  redeemTicket: {
    path: "redeem-ticket",
    name: "redeem-ticket",
    title: "ไถ่ถอน",
  },
  blacklist: { path: "blacklist", name: "blacklist", title: "รูปพรรณของโจร" },
  blacklistNew: {
    path: "blacklist/:type/new",
    name: "blacklist-new",
    title: "บันทึกบุคคลอันตราย",
  },
  blacklistEdit: {
    path: "blacklist/:type/:id",
    name: "blacklist-edit",
    title: "บันทึกบุคคลอันตราย",
  },
  stoneGoods: {
    path: "stone-goods",
    name: "stone-goods",
    title: "รูปพรรณของโจร",
  },
  stoneGoodsNew: {
    path: "stone-goods/new",
    name: "stone-goods-new",
    title: "บันทึกบุคคลอันตราย",
  },
  stoneGoodsEdit: {
    path: "stone-goods/:id",
    name: "stone-goods-edit",
    title: "บันทึกบุคคลอันตราย",
  },
  pawnNew: {
    path: "pawn/new",
    name: EPawnPathName.PAWNNEW,
    title: EPawnPathNameOf.PAWNNEW,
  },
  pawnEdit: {
    path: "pawn/edit",
    name: EPawnPathName.PAWNEDIT,
    title: EPawnPathNameOf.PAWNEDIT,
  },
  pawnReverse: {
    path: "pawn/reverse",
    name: EPawnPathName.PAWNREVERSE,
    title: EPawnPathNameOf.PAWNREVERSE,
  },
  pawnDelete: {
    path: "pawn/delete",
    name: EPawnPathName.PAWNDELETE,
    title: EPawnPathNameOf.PAWNDELETE,
  },
  pawnView: {
    path: "pawn/view/:ticketNo",
    name: EPawnPathName.PAWNVIEW,
    title: EPawnPathNameOf.PAWNVIEW,
  },
  pawnPrint: {
    path: "pawn/print/:ticketId",
    name: "pawn-print",
    title: "พิมพ์ตั๋ว",
  },
  redeemEnterPawn: {
    path: "pawn/redeem-enter",
    name: "redeem-enter-pawn",
    title: "ไถ่ถอนเข้าตั๋ว",
  },
  redeemEnterPawnNew: {
    path: "pawn/redeem-enter/new",
    name: "redeem-enter-pawn-new",
  },
  thaiReportsTicket: {
    path: "thai-reports/ticket-shiftings",
    name: EThaiReportsTicketPathName.TICKRT_SHIFTING,
    title: "ผลัดตั๋วจำนำ",
  },

  thaiReportsEstimatesNormal: {
    path: "estimates-normal",
    name: EThaiReportsTicketPathName.ESTIMATES_NORMAL,
    title: "ประเมินราคาขายของหลุด",
  },
  thaiReportsEstimatesRenew: {
    path: "estimates-renew",
    name: EThaiReportsTicketPathName.ESTIMATES_RENEW,
    title: "ประเมินราคาขายของหลุดจากผลัด",
  },

  thaiReportsNewTicket: {
    path: "thai-reports/ticket-shiftings/new",
    name: EThaiReportsTicketPathName.ADD_TICKRT_SHIFTING,
  },
  thaiReportsCheckItem: {
    path: "thai-reports/check-ticket-items",
    name: EThaiReportsTicketPathName.CHECK_TICKETS_ITEM,
    title: "ตรวจสอบของหลุดจำนำ",
  },
  thaiReportsCheckNew: {
    path: "thai-reports/check-ticket-items/new",
    name: EThaiReportsTicketPathName.ADD_CHECK_TICKETS_ITEM,
  },
  chinaReportCheckItem: {
    path: "china-clerks/china-clerks-report",
    name: "pledge-clerks-report",
    title: "ของผลัดทำหลุดจำนำ",
  },
  chinaCancelCheck: {
    path: "china-cancel-clerks/cancel-clerks",
    name: "cancel-clerks",
    title: "ยกเลิกทำหลุด",
  },

  ticketEvent: {
    path: "ticket-suspend/report-ticket-suspend",
    name: "ticket-suspend",
    title: "แจ้งเหตุการณ์ตั๋ว",
  },
  ticketSuspends: {
    path: "ticket-suspend/report-ticket-suspend/new",
    name: "ticket-suspends",
  },
  generalReport: {
    path: "general-report",
    name: EReportPathName.GeneralReports,
    title: "รายงานทั่วไป",
  },
  stateReport: {
    path: "state-report",
    name: EReportPathName.StateReports,
    title: "รายงานส่วนราชการ",
  },
};
