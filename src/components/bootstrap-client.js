// "use client";
// import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// export default function BootstrapClient() {
//   useEffect(() => {}, []);
//   return null;
// }

"use client";

import Script from "next/script";

export default function BootstrapClient() {
  return (
    <>
      {/* jQuery FIRST */}
      <Script src="/admin/vendor/jquery/jquery.min.js" />

      {/* Bootstrap JS SECOND */}
      <Script src="/admin/vendor/bootstrap/js/bootstrap.bundle.min.js" />

      {/* SB Admin JS LAST */}
      <Script src="/admin/js/sb-admin-2.min.js" />
    </>
  );
}
