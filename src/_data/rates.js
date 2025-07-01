-const URL =
-  "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,ARS-BRL,BTC-BRL";
+const URL =
+  "https://economia.awesomeapi.com.br/last/" +
+  [
+    "USD-BRL",
+    "EUR-BRL",
+    "ARS-BRL",
+    "GBP-BRL",
+    "CAD-BRL",
+    "AUD-BRL",
+    "CHF-BRL",
+    "JPY-BRL",
+    "BTC-BRL"
+  ].join(",");
 …
   return {
     USDBRL: +j.USDBRL.bid,
     EURBRL: +j.EURBRL.bid,
     ARSBRL: +j.ARSBRL.bid,
+    GBPBRL: +j.GBPBRL.bid,
+    CADBRL: +j.CADBRL.bid,
+    AUDBRL: +j.AUDBRL.bid,
+    CHFBRL: +j.CHFBRL.bid,
+    JPYBRL: +j.JPYBRL.bid,
     BTCBRL: +j.BTCBRL.bid
   };
