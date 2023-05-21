import { useAuth } from "@/_composables/auth";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PageLayout from "@/views/PageLayout.vue";
import { SystemPath } from "@/store";
import { EMenu } from "@/_helpers/types";
import { authService } from "@/_services/auth.service";
import { notification } from "ant-design-vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${SystemPath.login.path}`,
    name: SystemPath.login.name,
    component: () => import("@/views/Login.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    component: PageLayout,
    meta: { requiresAuth: true },
    redirect: { name: SystemPath.home.name },
    children: [
      {
        path: SystemPath.home.path,
        redirect: { name: SystemPath.home.name },
      },
      {
        path: SystemPath.home.path,
        name: SystemPath.home.name,
        component: () => import("@/views/Home.vue"),
        meta: {
          title: SystemPath.home.title,
        },
      },
      {
        path: SystemPath.user.path,
        name: SystemPath.user.name,
        component: () => import("@/views/userManagements/UserManagements.vue"),
        meta: {
          title: SystemPath.user.title,
          slug: EMenu.canSetPermission,
        },
      },
      {
        path: SystemPath.userNew.path,
        name: SystemPath.userNew.name,
        component: () => import("@/views/userManagements/UserManagement.vue"),
        meta: {
          title: SystemPath.user.title,
          slug: EMenu.canSetPermission,
        },
      },
      {
        path: SystemPath.userEdit.path,
        name: SystemPath.userEdit.name,
        component: () => import("@/views/userManagements/UserManagement.vue"),
        meta: {
          title: SystemPath.user.title,
          slug: EMenu.canSetPermission,
        },
      },
      {
        path: SystemPath.passwordChange.path,
        name: SystemPath.passwordChange.name,
        component: () => import("@/views/userManagements/PasswordChange.vue"),
        meta: {
          title: SystemPath.passwordChange.title,
          slug: EMenu.canSetPermission,
        },
      },
      {
        path: SystemPath.settingsBranch.path,
        name: SystemPath.settingsBranch.name,
        component: () =>
          import("@/views/settings/branchManagements/Branchs.vue"),
        meta: {
          title: SystemPath.settingsBranch.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsBranchNew.path,
        name: SystemPath.settingsBranchNew.name,
        component: () =>
          import("@/views/settings/branchManagements/Branch.vue"),
        meta: {
          title: SystemPath.settingsBranch.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsBranchEdit.path,
        name: SystemPath.settingsBranchEdit.name,
        component: () =>
          import("@/views/settings/branchManagements/Branch.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsBranch.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: `${SystemPath.settingsInterest.path}/:type`,
        name: SystemPath.settingsInterest.name,
        component: () =>
          import("@/views/settings/interestManagements/Interests.vue"),
        // redirect:{name:'setting-interest',params:{type:'normal'}},
        props: true,
        meta: {
          title: SystemPath.settingsInterest.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsInterestNew.path,
        name: SystemPath.settingsInterestNew.name,
        component: () =>
          import("@/views/settings/interestManagements/Interest.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsInterest.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsInterestEdit.path,
        name: SystemPath.settingsInterestEdit.name,
        component: () =>
          import("@/views/settings/interestManagements/Interest.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsInterest.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsAssetType.path,
        name: SystemPath.settingsAssetType.name,
        component: () => import("@/views/settings/AssetTypes.vue"),
        meta: {
          title: SystemPath.settingsAssetType.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsNationality.path,
        name: SystemPath.settingsNationality.name,
        component: () => import("@/views/settings/Nationalitys.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsNationality.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsAssetGroup.path,
        name: SystemPath.settingsAssetGroup.name,
        component: () => import("@/views/settings/AssetGroups.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsAssetGroup.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsBrand.path,
        name: SystemPath.settingsBrand.name,
        component: () => import("@/views/settings/Brands.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsBrand.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsModel.path,
        name: SystemPath.settingsModel.name,
        component: () => import("@/views/settings/Models.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsModel.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsUnit.path,
        name: SystemPath.settingsUnit.name,
        component: () => import("@/views/settings/Units.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsUnit.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.settingsHoliday.path,
        name: SystemPath.settingsHoliday.name,
        component: () => import("@/views/settings/Holidays.vue"),
        props: true,
        meta: {
          title: SystemPath.settingsHoliday.title,
          slug: EMenu.canMainData,
        },
      },
      {
        path: SystemPath.searchTicket.path,
        name: SystemPath.searchTicket.name,
        component: () => import("@/views/SearchTicket.vue"),
        props: true,
        meta: {
          title: SystemPath.searchTicket.title,
          slug: EMenu.canSearch,
        },
      },
      {
        path: `${SystemPath.redeemTicket.path}/:type`,
        name: SystemPath.redeemTicket.name,
        component: () => import("@/views/Redeem.vue"),
        meta: {
          title: SystemPath.redeemTicket.title,
          slug: EMenu.canRedemption,
        },
      },
      {
        path: `${SystemPath.blacklist.path}/:type`,
        name: SystemPath.blacklist.name,
        component: () => import("@/views/blacklists/Blacklists.vue"),
        props: true,
        meta: {
          title: SystemPath.blacklist.title,
          slug: EMenu.canBlacklist,
        },
      },
      {
        path: SystemPath.blacklistNew.path,
        name: SystemPath.blacklistNew.name,
        props: true,
        component: () => import("@/views/blacklists/Blacklist.vue"),
        meta: {
          title: SystemPath.blacklistNew.title,
          slug: EMenu.canBlacklist,
        },
      },
      {
        path: SystemPath.blacklistEdit.path,
        name: SystemPath.blacklistEdit.name,
        props: true,
        component: () => import("@/views/blacklists/Blacklist.vue"),
        meta: {
          title: SystemPath.blacklistEdit.title,
          slug: EMenu.canBlacklist,
        },
      },
      {
        path: SystemPath.stoneGoods.path,
        name: SystemPath.stoneGoods.name,
        component: () => import("@/views/blacklists/Blacklists.vue"),
        meta: {
          title: SystemPath.stoneGoods.title,
          slug: EMenu.canBlacklist,
        },
      },
      {
        path: SystemPath.pawnNew.path,
        name: SystemPath.pawnNew.name,
        component: () => import("@/views/pawn/Pawn.vue"),
        meta: {
          title: SystemPath.pawnNew.title,
          slug: EMenu.canPawn,
        },
      },
      {
        path: SystemPath.pawnEdit.path,
        name: SystemPath.pawnEdit.name,
        component: () => import("@/views/pawn/Pawn.vue"),
        meta: {
          title: SystemPath.pawnEdit.title,
          slug: EMenu.canPawn,
        },
      },
      {
        path: SystemPath.pawnReverse.path,
        name: SystemPath.pawnReverse.name,
        component: () => import("@/views/pawn/Pawn.vue"),
        meta: {
          title: SystemPath.pawnReverse.title,
          slug: EMenu.canPawn,
        },
      },
      {
        path: SystemPath.pawnDelete.path,
        name: SystemPath.pawnDelete.name,
        component: () => import("@/views/pawn/Pawn.vue"),
        meta: {
          title: SystemPath.pawnDelete.title,
          slug: EMenu.canPawn,
        },
      },
      {
        path: SystemPath.pawnView.path,
        name: SystemPath.pawnView.name,
        component: () => import("@/views/pawn/Pawn.vue"),
        meta: {
          title: SystemPath.pawnView.title,
          slug: EMenu.canPawn,
        },
      },
      {
        path: SystemPath.redeemEnterPawn.path,
        name: SystemPath.redeemEnterPawn.name,
        component: () => import("@/views/redeemEnterPawn/RedeemEnterPawns.vue"),
        meta: {
          title: SystemPath.redeemEnterPawn.title,
          slug: EMenu.canEditPawn,
        },
      },
      {
        path: SystemPath.redeemEnterPawnNew.path,
        name: SystemPath.redeemEnterPawnNew.name,
        component: () => import("@/views/redeemEnterPawn/RedeemEnterPawn.vue"),
        meta: {
          title: SystemPath.redeemEnterPawn.title,
          slug: EMenu.canEditPawn,
        },
      },
      {
        path: SystemPath.thaiReportsTicket.path,
        name: SystemPath.thaiReportsTicket.name,
        component: () => import("@/views/thaiClerks/TicketShiftings.vue"),
        meta: {
          title: SystemPath.thaiReportsTicket.title,
          slug: EMenu.canThaiClerk,
        },
      },
      {
        path: SystemPath.thaiReportsNewTicket.path,
        name: SystemPath.thaiReportsNewTicket.name,
        component: () => import("@/views/thaiClerks/TicketShifting.vue"),
        meta: {
          title: SystemPath.thaiReportsTicket.title,
          slug: EMenu.canThaiClerk,
        },
      },
      {
        path: SystemPath.thaiReportsCheckItem.path,
        name: SystemPath.thaiReportsCheckItem.name,
        component: () => import("@/views/thaiClerks/TicketExpireds.vue"),
        meta: {
          title: SystemPath.thaiReportsCheckItem.title,
          slug: EMenu.canThaiClerk,
        },
      },
      {
        path: SystemPath.thaiReportsCheckNew.path,
        name: SystemPath.thaiReportsCheckNew.name,
        component: () => import("@/views/thaiClerks/TicketShifting.vue"),
        meta: {
          title: SystemPath.thaiReportsCheckItem.title,
          slug: EMenu.canThaiClerk,
        },
      },
      {
        path: SystemPath.thaiReportsEstimatesNormal.path,
        name: SystemPath.thaiReportsEstimatesNormal.name,
        component: () => import("@/views/thaiClerks/Estimates.vue"),
        meta: {
          title: SystemPath.thaiReportsEstimatesNormal.title,
          slug: EMenu.canThaiClerk,
        },
      },
      {
        path: SystemPath.thaiReportsEstimatesRenew.path,
        name: SystemPath.thaiReportsEstimatesRenew.name,
        component: () => import("@/views/thaiClerks/Estimates.vue"),
        meta: {
          title: SystemPath.thaiReportsEstimatesRenew.title,
          slug: EMenu.canThaiClerk,
        },
      },
      {
        path: SystemPath.chinaReportCheckItem.path,
        name: SystemPath.chinaReportCheckItem.name,
        component: () => import("@/views/chinaClerks/ClerksPledgeReport.vue"),
        meta: {
          title: SystemPath.chinaReportCheckItem.title,
          slug: EMenu.canChinaClerk,
        },
      },
      {
        path: SystemPath.chinaCancelCheck.path,
        name: SystemPath.chinaCancelCheck.name,
        component: () => import("@/views/chinaClerks/ClerksCancel.vue"),
        meta: {
          title: SystemPath.chinaCancelCheck.title,
          slug: EMenu.canChinaClerk,
        },
      },
      {
        path: SystemPath.ticketEvent.path,
        name: SystemPath.ticketEvent.name,
        component: () => import("@/views/ticketSuspend/TicketSuspend.vue"),
        meta: {
          title: SystemPath.ticketEvent.title,
          slug: EMenu.canEventTicket,
        },
      },
      {
        path: SystemPath.ticketSuspends.path,
        name: SystemPath.ticketSuspends.name,
        component: () => import("@/views/ticketSuspend/TicketSuspends.vue"),
        meta: {
          title: SystemPath.ticketEvent.title,
          slug: EMenu.canEventTicket,
        },
      },
      {
        path: SystemPath.generalReport.path,
        name: SystemPath.generalReport.name,
        component: () => import("@/components/ExportPage.vue"),
        meta: {
          title: SystemPath.generalReport.title,
          slug: EMenu.canGeneralReport,
        },
      },
      {
        path: SystemPath.stateReport.path,
        name: SystemPath.stateReport.name,
        component: () => import("@/components/ExportPage.vue"),
        meta: {
          title: SystemPath.stateReport.title,
          slug: EMenu.canStateReport,
        },
      },
    ],
  },
  {
    path: "/:notFound(.*)",
    redirect: `/${SystemPath.login.path}`,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { token } = useAuth();

  //Head Title
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  document.title = nearestWithTitle?.meta.title
    ? `Pawnshop | ${nearestWithTitle.meta.title}`
    : "Pawnshop";
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).forEach(
    (el) => el.parentNode?.removeChild(el)
  );

  if (token.value && !nearestWithTitle) {
    if (to.name === SystemPath.login.name) {
      next({ name: SystemPath.home.name });
    }
  }

  // Not logged into a guarded route?
  if (!token.value && to.meta.requiresAuth === true) {
    next({ name: SystemPath.login.name });
  } else if (to.name === SystemPath.login.name && token.value) {
    next({ name: SystemPath.login.name });
  } else {
    const me = authService.me();
    const isPermissions = me?.permissions?.some(
      (ele) => ele.permissionSlug === to.meta?.slug
    );
    if (
      !isPermissions &&
      ![SystemPath.login.name, SystemPath.home.name].includes(to.name as string)
    ) {
      notification.error({
        message: "",
        description: "ไม่มีสิทธิ์เข้าใช้งานในส่วนนี้",
      });
      next({ name: SystemPath.home.name });
      return;
    }
    next();
  }
});

export default router;
