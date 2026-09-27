// MI 點名系統設定（已填好，一般不需修改）
// firebaseConfig 不是密碼，公開在 GitHub 上是正常的；資料安全由 Firestore 安全規則保護。
export const firebaseConfig = {
  apiKey: "AIzaSyDl69DcRIpjplgMHrpnGMldkoIXe1C3S78",
  authDomain: "kids-mi.firebaseapp.com",
  projectId: "kids-mi",
  storageBucket: "kids-mi.firebasestorage.app",
  messagingSenderId: "848795798960",
  appId: "1:848795798960:web:e60dac1baddb8fbe769a75"
};

// 只有這個網域的學校帳戶才可登入
export const ALLOWED_DOMAIN = "lwcps.edu.hk";

// 登入方式：Google Workspace
export const AUTH_PROVIDER = "google";

// 管理員：可在「管理」頁中途新增／刪除組員（須與 firestore.rules 的 isAdmin() 一致）
export const ADMINS = ["wywong@lwcps.edu.hk", "it@lwcps.edu.hk", "rchen@lwcps.edu.hk"];
