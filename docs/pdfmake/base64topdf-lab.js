const base64 = require('base64topdf')

let encodedPdf = base64.base64Encode('page3.pdf');

//console.log(encodedPdf);

let code ='JVBERi0xLjMKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUuMjggODQxLjg5XQovQ29udGVudHMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDE5ODQ+PgpzdHJlYW0KMC41NyB3CjAgRwpCVAovRjEgMTYgVGYKMTguNCBUTAowIGcKMjguMzUgNzU2Ljg1IFRkCihcKDFcKSAgMXgzPSkgVGoKVCogKCApIFRqClQqIChcKDRcKSAgNHgxMT0pIFRqClQqICggKSBUagpUKiAoXCg3XCkgIDh4Nj0pIFRqClQqICggKSBUagpUKiAoXCgxMFwpICAxMXgxMT0pIFRqClQqICggKSBUagpUKiAoXCgxM1wpICA2eDk9KSBUagpUKiAoICkgVGoKVCogKFwoMTZcKSAgMTJ4Nj0pIFRqClQqICggKSBUagpUKiAoXCgxOVwpICAxeDEwPSkgVGoKVCogKCApIFRqClQqIChcKDIyXCkgIDl4Nj0pIFRqClQqICggKSBUagpUKiAoXCgyNVwpICAxMng1PSkgVGoKVCogKCApIFRqClQqIChcKDI4XCkgIDR4ND0pIFRqClQqICggKSBUagpUKiAoXCgzMVwpICAyeDI9KSBUagpUKiAoICkgVGoKVCogKFwoMzRcKSAgNXg0PSkgVGoKVCogKCApIFRqClQqIChcKDM3XCkgIDV4MT0pIFRqClQqICggKSBUagpUKiAoXCg0MFwpICA2eDg9KSBUagpUKiAoICkgVGoKVCogKFwoNDNcKSAgOHgxPSkgVGoKVCogKCApIFRqClQqIChcKDQ2XCkgIDR4Nj0pIFRqClQqICggKSBUagpUKiAoXCg0OVwpICA1eDk9KSBUagpUKiAoICkgVGoKVCogKFwoNTJcKSAgMTB4Nj0pIFRqClQqICggKSBUagpUKiAoXCg1NVwpICA1eDU9KSBUagpUKiAoICkgVGoKVCogKFwoNThcKSAgMXg5PSkgVGoKRVQKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjIyNi43NyA3NTYuODUgVGQKKFwoMlwpICAxMXgyPSkgVGoKVCogKCApIFRqClQqIChcKDVcKSAgMTF4OT0pIFRqClQqICggKSBUagpUKiAoXCg4XCkgIDd4MT0pIFRqClQqICggKSBUagpUKiAoXCgxMVwpICA0eDA9KSBUagpUKiAoICkgVGoKVCogKFwoMTRcKSAgNng0PSkgVGoKVCogKCApIFRqClQqIChcKDE3XCkgIDN4Mj0pIFRqClQqICggKSBUagpUKiAoXCgyMFwpICAxMng3PSkgVGoKVCogKCApIFRqClQqIChcKDIzXCkgIDJ4NT0pIFRqClQqICggKSBUagpUKiAoXCgyNlwpICA1eDEwPSkgVGoKVCogKCApIFRqClQqIChcKDI5XCkgIDExeDM9KSBUagpUKiAoICkgVGoKVCogKFwoMzJcKSAgMXg0PSkgVGoKVCogKCApIFRqClQqIChcKDM1XCkgIDB4MTA9KSBUagpUKiAoICkgVGoKVCogKFwoMzhcKSAgMXg1PSkgVGoKVCogKCApIFRqClQqIChcKDQxXCkgIDV4Mz0pIFRqClQqICggKSBUagpUKiAoXCg0NFwpICAyeDE9KSBUagpUKiAoICkgVGoKVCogKFwoNDdcKSAgM3gxPSkgVGoKVCogKCApIFRqClQqIChcKDUwXCkgIDl4Nz0pIFRqClQqICggKSBUagpUKiAoXCg1M1wpICAxMng4PSkgVGoKVCogKCApIFRqClQqIChcKDU2XCkgIDEyeDA9KSBUagpUKiAoICkgVGoKVCogKFwoNTlcKSAgMTJ4Mj0pIFRqCkVUCkJUCi9GMSAxNiBUZgoxOC40IFRMCjAgZwo0MjUuMjAgNzU2Ljg1IFRkCihcKDNcKSAgMTF4NT0pIFRqClQqICggKSBUagpUKiAoXCg2XCkgIDN4OD0pIFRqClQqICggKSBUagpUKiAoXCg5XCkgIDR4MT0pIFRqClQqICggKSBUagpUKiAoXCgxMlwpICAxMngxMj0pIFRqClQqICggKSBUagpUKiAoXCgxNVwpICA0eDU9KSBUagpUKiAoICkgVGoKVCogKFwoMThcKSAgMngxMj0pIFRqClQqICggKSBUagpUKiAoXCgyMVwpICAxMngxPSkgVGoKVCogKCApIFRqClQqIChcKDI0XCkgIDl4MTI9KSBUagpUKiAoICkgVGoKVCogKFwoMjdcKSAgMXgxMT0pIFRqClQqICggKSBUagpUKiAoXCgzMFwpICAzeDc9KSBUagpUKiAoICkgVGoKVCogKFwoMzNcKSAgMng2PSkgVGoKVCogKCApIFRqClQqIChcKDM2XCkgIDEyeDEwPSkgVGoKVCogKCApIFRqClQqIChcKDM5XCkgIDEweDExPSkgVGoKVCogKCApIFRqClQqIChcKDQyXCkgIDd4Mz0pIFRqClQqICggKSBUagpUKiAoXCg0NVwpICA4eDM9KSBUagpUKiAoICkgVGoKVCogKFwoNDhcKSAgOHg5PSkgVGoKVCogKCApIFRqClQqIChcKDUxXCkgIDZ4Nj0pIFRqClQqICggKSBUagpUKiAoXCg1NFwpICA5eDk9KSBUagpUKiAoICkgVGoKVCogKFwoNTdcJVBERi0xLjMKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUuMjggODQxLjg5XQovQ29udGVudHMgNCAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDE5ODQ+PgpzdHJlYW0KMC41NyB3CjAgRwpCVAovRjEgMTYgVGYKMTguNCBUTAowIGcKMjguMzUgNzU2Ljg1IFRkCihcKDFcKSAgMXgzPSkgVGoKVCogKCApIFRqClQqIChcKDRcKSAgNHgxMT0pIFRqClQqICggKSBUagpUKiAoXCg3XCkgIDh4Nj0pIFRqClQqICggKSBUagpUKiAoXCgxMFwpICAxMXgxMT0pIFRqClQqICggKSBUagpUKiAoXCgxM1wpICA2eDk9KSBUagpUKiAoICkgVGoKVCogKFwoMTZcKSAgMTJ4Nj0pIFRqClQqICggKSBUagpUKiAoXCgxOVwpICAxeDEwPSkgVGoKVCogKCApIFRqClQqIChcKDIyXCkgIDl4Nj0pIFRqClQqICggKSBUagpUKiAoXCgyNVwpICAxMng1PSkgVGoKVCogKCApIFRqClQqIChcKDI4XCkgIDR4ND0pIFRqClQqICggKSBUagpUKiAoXCgzMVwpICAyeDI9KSBUagpUKiAoICkgVGoKVCogKFwoMzRcKSAgNXg0PSkgVGoKVCogKCApIFRqClQqIChcKDM3XCkgIDV4MT0pIFRqClQqICggKSBUagpUKiAoXCg0MFwpICA2eDg9KSBUagpUKiAoICkgVGoKVCogKFwoNDNcKSAgOHgxPSkgVGoKVCogKCApIFRqClQqIChcKDQ2XCkgIDR4Nj0pIFRqClQqICggKSBUagpUKiAoXCg0OVwpICA1eDk9KSBUagpUKiAoICkgVGoKVCogKFwoNTJcKSAgMTB4Nj0pIFRqClQqICggKSBUagpUKiAoXCg1NVwpICA1eDU9KSBUagpUKiAoICkgVGoKVCogKFwoNThcKSAgMXg5PSkgVGoKRVQKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjIyNi43NyA3NTYuODUgVGQKKFwoMlwpICAxMXgyPSkgVGoKVCogKCApIFRqClQqIChcKDVcKSAgMTF4OT0pIFRqClQqICggKSBUagpUKiAoXCg4XCkgIDd4MT0pIFRqClQqICggKSBUagpUKiAoXCgxMVwpICA0eDA9KSBUagpUKiAoICkgVGoKVCogKFwoMTRcKSAgNng0PSkgVGoKVCogKCApIFRqClQqIChcKDE3XCkgIDN4Mj0pIFRqClQqICggKSBUagpUKiAoXCgyMFwpICAxMng3PSkgVGoKVCogKCApIFRqClQqIChcKDIzXCkgIDJ4NT0pIFRqClQqICggKSBUagpUKiAoXCgyNlwpICA1eDEwPSkgVGoKVCogKCApIFRqClQqIChcKDI5XCkgIDExeDM9KSBUagpUKiAoICkgVGoKVCogKFwoMzJcKSAgMXg0PSkgVGoKVCogKCApIFRqClQqIChcKDM1XCkgIDB4MTA9KSBUagpUKiAoICkgVGoKVCogKFwoMzhcKSAgMXg1PSkgVGoKVCogKCApIFRqClQqIChcKDQxXCkgIDV4Mz0pIFRqClQqICggKSBUagpUKiAoXCg0NFwpICAyeDE9KSBUagpUKiAoICkgVGoKVCogKFwoNDdcKSAgM3gxPSkgVGoKVCogKCApIFRqClQqIChcKDUwXCkgIDl4Nz0pIFRqClQqICggKSBUagpUKiAoXCg1M1wpICAxMng4PSkgVGoKVCogKCApIFRqClQqIChcKDU2XCkgIDEyeDA9KSBUagpUKiAoICkgVGoKVCogKFwoNTlcKSAgMTJ4Mj0pIFRqCkVUCkJUCi9GMSAxNiBUZgoxOC40IFRMCjAgZwo0MjUuMjAgNzU2Ljg1IFRkCihcKDNcKSAgMTF4NT0pIFRqClQqICggKSBUagpUKiAoXCg2XCkgIDN4OD0pIFRqClQqICggKSBUagpUKiAoXCg5XCkgIDR4MT0pIFRqClQqICggKSBUagpUKiAoXCgxMlwpICAxMngxMj0pIFRqClQqICggKSBUagpUKiAoXCgxNVwpICA0eDU9KSBUagpUKiAoICkgVGoKVCogKFwoMThcKSAgMngxMj0pIFRqClQqICggKSBUagpUKiAoXCgyMVwpICAxMngxPSkgVGoKVCogKCApIFRqClQqIChcKDI0XCkgIDl4MTI9KSBUagpUKiAoICkgVGoKVCogKFwoMjdcKSAgMXgxMT0pIFRqClQqICggKSBUagpUKiAoXCgzMFwpICAzeDc9KSBUagpUKiAoICkgVGoKVCogKFwoMzNcKSAgMng2PSkgVGoKVCogKCApIFRqClQqIChcKDM2XCkgIDEyeDEwPSkgVGoKVCogKCApIFRqClQqIChcKDM5XCkgIDEweDExPSkgVGoKVCogKCApIFRqClQqIChcKDQyXCkgIDd4Mz0pIFRqClQqICggKSBUagpUKiAoXCg0NVwpICA4eDM9KSBUagpUKiAoICkgVGoKVCogKFwoNDhcKSAgOHg5PSkgVGoKVCogKCApIFRqClQqIChcKDUxXCkgIDZ4Nj0pIFRqClQqICggKSBUagpUKiAoXCg1NFwpICA5eDk9KSBUagpUKiAoICkgVGoKVCogKFwoNTdcKSAgNHgyPSkgVGoKVCogKCApIFRqClQqIChcKDYwXCkgIDB4MTE9KSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwvVHlwZSAvUGFnZQovUGFyZW50IDEgMCBSCi9SZXNvdXJjZXMgMiAwIFIKL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KL0NvbnRlbnRzIDYgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8L0xlbmd0aCAxOTcyPj4Kc3RyZWFtCjAuNTcgdwowIEcKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjI4LjM1IDc1Ni44NSBUZAooICkgVGoKVCogKFwoNjFcKSAgN3gwPSkgVGoKVCogKCApIFRqClQqIChcKDY0XCkgIDl4NT0pIFRqClQqICggKSBUagpUKiAoXCg2N1wpICAzeDQ9KSBUagpUKiAoICkgVGoKVCogKFwoNzBcKSAgNHgxMD0pIFRqClQqICggKSBUagpUKiAoXCg3M1wpICA2eDEyPSkgVGoKVCogKCApIFRqClQqIChcKDc2XCkgIDEweDI9KSBUagpUKiAoICkgVGoKVCogKFwoNzlcKSAgMXgyPSkgVGoKVCogKCApIFRqClQqIChcKDgyXCkgIDN4NT0pIFRqClQqICggKSBUagpUKiAoXCg4NVwpICAyeDg9KSBUagpUKiAoICkgVGoKVCogKFwoODhcKSAgNng1PSkgVGoKVCogKCApIFRqClQqIChcKDkxXCkgIDR4OD0pIFRqClQqICggKSBUagpUKiAoXCg5NFwpICA1eDEyPSkgVGoKVCogKCApIFRqClQqIChcKDk3XCkgIDEyeDQ9KSBUagpUKiAoICkgVGoKVCogKFwoMTAwXCkgIDEweDM9KSBUagpUKiAoICkgVGoKVCogKFwoMTAzXCkgIDF4OD0pIFRqClQqICggKSBUagpUKiAoXCgxMDZcKSAgMng3PSkgVGoKVCogKCApIFRqClQqIChcKDEwOVwpICAxeDY9KSBUagpUKiAoICkgVGoKVCogKFwoMTEyXCkgIDEweDc9KSBUagpUKiAoICkgVGoKVCogKFwoMTE1XCkgIDR4Mz0pIFRqClQqICggKSBUagpFVApCVAovRjEgMTYgVGYKMTguNCBUTAowIGcKMjI2Ljc3IDc1Ni44NSBUZAooICkgVGoKVCogKFwoNjJcKSAgMngwPSkgVGoKVCogKCApIFRqClQqIChcKDY1XCkgIDh4OD0pIFRqClQqICggKSBUagpUKiAoXCg2OFwpICAzeDEyPSkgVGoKVCogKCApIFRqClQqIChcKDcxXCkgIDN4OT0pIFRqClQqICggKSBUagpUKiAoXCg3NFwpICA3eDk9KSBUagpUKiAoICkgVGoKVCogKFwoNzdcKSAgMHg0PSkgVGoKVCogKCApIFRqClQqIChcKDgwXCkgIDEweDk9KSBUagpUKiAoICkgVGoKVCogKFwoODNcKSAgN3gyPSkgVGoKVCogKCApIFRqClQqIChcKDg2XCkgIDd4NT0pIFRqClQqICggKSBUagpUKiAoXCg4OVwpICAzeDEwPSkgVGoKVCogKCApIFRqClQqIChcKDkyXCkgIDF4MD0pIFRqClQqICggKSBUagpUKiAoXCg5NVwpICA3eDExPSkgVGoKVCogKCApIFRqClQqIChcKDk4XCkgIDl4MT0pIFRqClQqICggKSBUagpUKiAoXCgxMDFcKSAgOHgxMT0pIFRqClQqICggKSBUagpUKiAoXCgxMDRcKSAgMTB4MD0pIFRqClQqICggKSBUagpUKiAoXCgxMDdcKSAgMHgzPSkgVGoKVCogKCApIFRqClQqIChcKDExMFwpICAxeDEyPSkgVGoKVCogKCApIFRqClQqIChcKDExM1wpICAzeDA9KSBUagpUKiAoICkgVGoKVCogKFwoMTE2XCkgIDV4Nj0pIFRqClQqICggKSBUagpFVApCVAovRjEgMTYgVGYKMTguNCBUTAowIGcKNDI1LjIwIDc1Ni44NSBUZAooICkgVGoKVCogKFwoNjNcKSAgN3gxMD0pIFRqClQqICggKSBUagpUKiAoXCg2NlwpICAyeDExPSkgVGoKVCogKCApIFRqClQqIChcKDY5XCkgIDEweDEwPSkgVGoKVCogKCApIFRqClQqIChcKDcyXCkgIDB4NT0pIFRqClQqICggKSBUagpUKiAoXCg3NVwpICAweDY9KSBUagpUKiAoICkgVGoKVCogKFwoNzhcKSAgMTF4Nj0pIFRqClQqICggKSBUagpUKiAoXCg4MVwpICAweDI9KSBUagpUKiAoICkgVGoKVCogKFwoODRcKSAgOHgyPSkgVGoKVCogKCApIFRqClQqIChcKDg3XCkgIDh4NT0pIFRqClQqICggKSBUagpUKiAoXCg5MFwpICAxeDc9KSBUagpUKiAoICkgVGoKVCogKFwoOTNcKSAgM3gzPSkgVGoKVCogKCApIFRqClQqIChcKDk2XCkgIDZ4MT0pIFRqClQqICggKSBUagpUKiAoXCg5OVwpICAxMXg3PSkgVGoKVCogKCApIFRqClQqIChcKDEwMlwpICAweDA9KSBUagpUKiAoICkgVGoKVCogKFwoMTA1XCkgIDEyeDM9KSBUagpUKiAoICkgVGoKVCogKFwoMTA4XCkgIDl4ND0pIFRqClQqICggKSBUagpUKiAoXCgxMTFcKSAgNXgwPSkgVGoKVCogKCApIFRqClQqIChcKDExNFwpICA2eDExPSkgVGoKVCogKCApIFRqClQqIChcKDExN1wpICA5eDg9KSBUagpUKiAoICkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago3IDAgb2JqCjw8L1R5cGUgL1BhZ2UKL1BhcmVudCAxIDAgUgovUmVzb3VyY2VzIDIgMCBSCi9NZWRpYUJveCBbMCAwIDU5NS4yOCA4NDEuODldCi9Db250ZW50cyA4IDAgUgo+PgplbmRvYmoKOCAwIG9iago8PC9MZW5ndGggNDkxPj4Kc3RyZWFtCjAuNTcgdwowIEcKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjI4LjM1IDc1Ni44NSBUZAooXCgxMThcKSAgMTJ4MTE9KSBUagpUKiAoICkgVGoKVCogKFwoMTIxXCkgIDZ4Nz0pIFRqClQqICggKSBUagpUKiAoXCgxMjRcKSAgOHg0PSkgVGoKVCogKCApIFRqClQqIChcKDEyN1wpICA5eDM9KSBUagpUKiAoICkgVGoKRVQKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjIyNi43NyA3NTYuODUgVGQKKFwoMTE5XCkgIDR4MTI9KSBUagpUKiAoICkgVGoKVCogKFwoMTIyXCkgIDExeDg9KSBUagpUKiAoICkgVGoKVCogKFwoMTI1XCkgIDl4MD0pIFRqClQqICggKSBUagpUKiAoXCgxMjhcKSAgNngyPSkgVGoKVCogKCApIFRqCkVUCkJUCi9GMSAxNiBUZgoxOC40IFRMCjAgZwo0MjUuMjAgNzU2Ljg1IFRkCihcKDEyMFwpICAweDk9KSBUagpUKiAoICkgVGoKVCogKFwoMTIzXCkgIDd4Nz0pIFRqClQqICggKSBUagpUKiAoXCgxMjZcKSAgNHg3PSkgVGoKVCogKCApIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKMSAwIG9iago8PC9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFIgNSAwIFIgNyAwIFIgXQovQ291bnQgMwo+PgplbmRvYmoKOSAwIG9iago8PC9CYXNlRm9udC9IZWx2ZXRpY2EvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTAgMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGQvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTEgMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLU9ibGlxdWUvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTIgMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGRPYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjEzIDAgb2JqCjw8L0Jhc2VGb250L0NvdXJpZXIvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTQgMCBvYmoKPDwvQmFzZUZvbnQvQ291cmllci1Cb2xkL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjE1IDAgb2JqCjw8L0Jhc2VGb250L0NvdXJpZXItT2JsaXF1ZS9UeXBlL0ZvbnQKL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoxNiAwIG9iago8PC9CYXNlRm9udC9Db3VyaWVyLUJvbGRPYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjE3IDAgb2JqCjw8L0Jhc2VGb250L1RpbWVzLVJvbWFuL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjE4IDAgb2JqCjw8L0Jhc2VGb250L1RpbWVzLUJvbGQvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTkgMCBvYmoKPDwvQmFzZUZvbnQvVGltZXMtSXRhbGljL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjIwIDAgb2JqCjw8L0Jhc2VGb250L1RpbWVzLUJvbGRJdGFsaWMvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMjEgMCBvYmoKPDwvQmFzZUZvbnQvWmFwZkRpbmdiYXRzL1R5cGUvRm9udAovRW5jb2RpbmcvU3RhbmRhcmRFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoyIDAgb2JqCjw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRm9udCA8PAovRjEgOSAwIFIKL0YyIDEwIDAgUgovRjMgMTEgMCBSCi9GNCAxMiAwIFIKL0Y1IDEzIDAgUgovRjYgMTQgMCBSCi9GNyAxNSAwIFIKL0Y4IDE2IDAgUgovRjkgMTcgMCBSCi9GMTAgMTggMCBSCi9GMTEgMTkgMCBSCi9GMTIgMjAgMCBSCi9GMTMgMjEgMCBSCj4+Ci9YT2JqZWN0IDw8Cj4+Cj4+CmVuZG9iagoyMiAwIG9iago8PAovUHJvZHVjZXIgKGpzUERGIDEueC1tYXN0ZXIpCi9DcmVhdGlvbkRhdGUgKEQ6MjAxODA2MTkyMTE2MzAtMDQnMDAnKQo+PgplbmRvYmoKMjMgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDEgMCBSCi9PcGVuQWN0aW9uIFszIDAgUiAvRml0SCBudWxsXQovUGFnZUxheW91dCAvT25lQ29sdW1uCj4+CmVuZG9iagp4cmVmCjAgMjQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDA0OTMyIDAwMDAwIG4gCjAwMDAwMDYyNDIgMDAwMDAgbiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMTE4IDAwMDAwIG4gCjAwMDAwMDIxNTIgMDAwMDAgbiAKMDAwMDAwMjI2MSAwMDAwMCBuIAowMDAwMDA0MjgzIDAwMDAwIG4gCjAwMDAwMDQzOTIgMDAwMDAgbiAKMDAwMDAwNTAwMSAwMDAwMCBuIAowMDAwMDA1MDkxIDAwMDAwIG4gCjAwMDAwMDUxODcgMDAwMDAgbiAKMDAwMDAwNTI4NiAwMDAwMCBuIAowMDAwMDA1Mzg5IDAwMDAwIG4gCjAwMDAwMDU0NzggMDAwMDAgbiAKMDAwMDAwNTU3MiAwMDAwMCBuIAowMDAwMDA1NjY5IDAwMDAwIG4gCjAwMDAwMDU3NzAgMDAwMDAgbiAKMDAwMDAwNTg2MyAwMDAwMCBuIAowMDAwMDA1OTU1IDAwMDAwIG4gCjAwMDAwMDYwNDkgMDAwMDAgbiAKMDAwMDAwNjE0NyAwMDAwMCBuIAowMDAwMDA2NDgyIDAwMDAwIG4gCjAwMDAwMDY1NzMgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSAyNAovUm9vdCAyMyAwIFIKL0luZm8gMjIgMCBSCj4+CnN0YXJ0eHJlZgo2Njc3CiUlRU9GKSAgNHgyPSkgVGoKVCogKCApIFRqClQqIChcKDYwXCkgIDB4MTE9KSBUagpFVAplbmRzdHJlYW0KZW5kb2JqCjUgMCBvYmoKPDwvVHlwZSAvUGFnZQovUGFyZW50IDEgMCBSCi9SZXNvdXJjZXMgMiAwIFIKL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KL0NvbnRlbnRzIDYgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8L0xlbmd0aCAxOTcyPj4Kc3RyZWFtCjAuNTcgdwowIEcKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjI4LjM1IDc1Ni44NSBUZAooICkgVGoKVCogKFwoNjFcKSAgN3gwPSkgVGoKVCogKCApIFRqClQqIChcKDY0XCkgIDl4NT0pIFRqClQqICggKSBUagpUKiAoXCg2N1wpICAzeDQ9KSBUagpUKiAoICkgVGoKVCogKFwoNzBcKSAgNHgxMD0pIFRqClQqICggKSBUagpUKiAoXCg3M1wpICA2eDEyPSkgVGoKVCogKCApIFRqClQqIChcKDc2XCkgIDEweDI9KSBUagpUKiAoICkgVGoKVCogKFwoNzlcKSAgMXgyPSkgVGoKVCogKCApIFRqClQqIChcKDgyXCkgIDN4NT0pIFRqClQqICggKSBUagpUKiAoXCg4NVwpICAyeDg9KSBUagpUKiAoICkgVGoKVCogKFwoODhcKSAgNng1PSkgVGoKVCogKCApIFRqClQqIChcKDkxXCkgIDR4OD0pIFRqClQqICggKSBUagpUKiAoXCg5NFwpICA1eDEyPSkgVGoKVCogKCApIFRqClQqIChcKDk3XCkgIDEyeDQ9KSBUagpUKiAoICkgVGoKVCogKFwoMTAwXCkgIDEweDM9KSBUagpUKiAoICkgVGoKVCogKFwoMTAzXCkgIDF4OD0pIFRqClQqICggKSBUagpUKiAoXCgxMDZcKSAgMng3PSkgVGoKVCogKCApIFRqClQqIChcKDEwOVwpICAxeDY9KSBUagpUKiAoICkgVGoKVCogKFwoMTEyXCkgIDEweDc9KSBUagpUKiAoICkgVGoKVCogKFwoMTE1XCkgIDR4Mz0pIFRqClQqICggKSBUagpFVApCVAovRjEgMTYgVGYKMTguNCBUTAowIGcKMjI2Ljc3IDc1Ni44NSBUZAooICkgVGoKVCogKFwoNjJcKSAgMngwPSkgVGoKVCogKCApIFRqClQqIChcKDY1XCkgIDh4OD0pIFRqClQqICggKSBUagpUKiAoXCg2OFwpICAzeDEyPSkgVGoKVCogKCApIFRqClQqIChcKDcxXCkgIDN4OT0pIFRqClQqICggKSBUagpUKiAoXCg3NFwpICA3eDk9KSBUagpUKiAoICkgVGoKVCogKFwoNzdcKSAgMHg0PSkgVGoKVCogKCApIFRqClQqIChcKDgwXCkgIDEweDk9KSBUagpUKiAoICkgVGoKVCogKFwoODNcKSAgN3gyPSkgVGoKVCogKCApIFRqClQqIChcKDg2XCkgIDd4NT0pIFRqClQqICggKSBUagpUKiAoXCg4OVwpICAzeDEwPSkgVGoKVCogKCApIFRqClQqIChcKDkyXCkgIDF4MD0pIFRqClQqICggKSBUagpUKiAoXCg5NVwpICA3eDExPSkgVGoKVCogKCApIFRqClQqIChcKDk4XCkgIDl4MT0pIFRqClQqICggKSBUagpUKiAoXCgxMDFcKSAgOHgxMT0pIFRqClQqICggKSBUagpUKiAoXCgxMDRcKSAgMTB4MD0pIFRqClQqICggKSBUagpUKiAoXCgxMDdcKSAgMHgzPSkgVGoKVCogKCApIFRqClQqIChcKDExMFwpICAxeDEyPSkgVGoKVCogKCApIFRqClQqIChcKDExM1wpICAzeDA9KSBUagpUKiAoICkgVGoKVCogKFwoMTE2XCkgIDV4Nj0pIFRqClQqICggKSBUagpFVApCVAovRjEgMTYgVGYKMTguNCBUTAowIGcKNDI1LjIwIDc1Ni44NSBUZAooICkgVGoKVCogKFwoNjNcKSAgN3gxMD0pIFRqClQqICggKSBUagpUKiAoXCg2NlwpICAyeDExPSkgVGoKVCogKCApIFRqClQqIChcKDY5XCkgIDEweDEwPSkgVGoKVCogKCApIFRqClQqIChcKDcyXCkgIDB4NT0pIFRqClQqICggKSBUagpUKiAoXCg3NVwpICAweDY9KSBUagpUKiAoICkgVGoKVCogKFwoNzhcKSAgMTF4Nj0pIFRqClQqICggKSBUagpUKiAoXCg4MVwpICAweDI9KSBUagpUKiAoICkgVGoKVCogKFwoODRcKSAgOHgyPSkgVGoKVCogKCApIFRqClQqIChcKDg3XCkgIDh4NT0pIFRqClQqICggKSBUagpUKiAoXCg5MFwpICAxeDc9KSBUagpUKiAoICkgVGoKVCogKFwoOTNcKSAgM3gzPSkgVGoKVCogKCApIFRqClQqIChcKDk2XCkgIDZ4MT0pIFRqClQqICggKSBUagpUKiAoXCg5OVwpICAxMXg3PSkgVGoKVCogKCApIFRqClQqIChcKDEwMlwpICAweDA9KSBUagpUKiAoICkgVGoKVCogKFwoMTA1XCkgIDEyeDM9KSBUagpUKiAoICkgVGoKVCogKFwoMTA4XCkgIDl4ND0pIFRqClQqICggKSBUagpUKiAoXCgxMTFcKSAgNXgwPSkgVGoKVCogKCApIFRqClQqIChcKDExNFwpICA2eDExPSkgVGoKVCogKCApIFRqClQqIChcKDExN1wpICA5eDg9KSBUagpUKiAoICkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iago3IDAgb2JqCjw8L1R5cGUgL1BhZ2UKL1BhcmVudCAxIDAgUgovUmVzb3VyY2VzIDIgMCBSCi9NZWRpYUJveCBbMCAwIDU5NS4yOCA4NDEuODldCi9Db250ZW50cyA4IDAgUgo+PgplbmRvYmoKOCAwIG9iago8PC9MZW5ndGggNDkxPj4Kc3RyZWFtCjAuNTcgdwowIEcKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjI4LjM1IDc1Ni44NSBUZAooXCgxMThcKSAgMTJ4MTE9KSBUagpUKiAoICkgVGoKVCogKFwoMTIxXCkgIDZ4Nz0pIFRqClQqICggKSBUagpUKiAoXCgxMjRcKSAgOHg0PSkgVGoKVCogKCApIFRqClQqIChcKDEyN1wpICA5eDM9KSBUagpUKiAoICkgVGoKRVQKQlQKL0YxIDE2IFRmCjE4LjQgVEwKMCBnCjIyNi43NyA3NTYuODUgVGQKKFwoMTE5XCkgIDR4MTI9KSBUagpUKiAoICkgVGoKVCogKFwoMTIyXCkgIDExeDg9KSBUagpUKiAoICkgVGoKVCogKFwoMTI1XCkgIDl4MD0pIFRqClQqICggKSBUagpUKiAoXCgxMjhcKSAgNngyPSkgVGoKVCogKCApIFRqCkVUCkJUCi9GMSAxNiBUZgoxOC40IFRMCjAgZwo0MjUuMjAgNzU2Ljg1IFRkCihcKDEyMFwpICAweDk9KSBUagpUKiAoICkgVGoKVCogKFwoMTIzXCkgIDd4Nz0pIFRqClQqICggKSBUagpUKiAoXCgxMjZcKSAgNHg3PSkgVGoKVCogKCApIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKMSAwIG9iago8PC9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFIgNSAwIFIgNyAwIFIgXQovQ291bnQgMwo+PgplbmRvYmoKOSAwIG9iago8PC9CYXNlRm9udC9IZWx2ZXRpY2EvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTAgMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGQvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTEgMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLU9ibGlxdWUvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTIgMCBvYmoKPDwvQmFzZUZvbnQvSGVsdmV0aWNhLUJvbGRPYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjEzIDAgb2JqCjw8L0Jhc2VGb250L0NvdXJpZXIvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTQgMCBvYmoKPDwvQmFzZUZvbnQvQ291cmllci1Cb2xkL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjE1IDAgb2JqCjw8L0Jhc2VGb250L0NvdXJpZXItT2JsaXF1ZS9UeXBlL0ZvbnQKL0VuY29kaW5nL1dpbkFuc2lFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoxNiAwIG9iago8PC9CYXNlRm9udC9Db3VyaWVyLUJvbGRPYmxpcXVlL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjE3IDAgb2JqCjw8L0Jhc2VGb250L1RpbWVzLVJvbWFuL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjE4IDAgb2JqCjw8L0Jhc2VGb250L1RpbWVzLUJvbGQvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMTkgMCBvYmoKPDwvQmFzZUZvbnQvVGltZXMtSXRhbGljL1R5cGUvRm9udAovRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nCi9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjIwIDAgb2JqCjw8L0Jhc2VGb250L1RpbWVzLUJvbGRJdGFsaWMvVHlwZS9Gb250Ci9FbmNvZGluZy9XaW5BbnNpRW5jb2RpbmcKL1N1YnR5cGUvVHlwZTE+PgplbmRvYmoKMjEgMCBvYmoKPDwvQmFzZUZvbnQvWmFwZkRpbmdiYXRzL1R5cGUvRm9udAovRW5jb2RpbmcvU3RhbmRhcmRFbmNvZGluZwovU3VidHlwZS9UeXBlMT4+CmVuZG9iagoyIDAgb2JqCjw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRm9udCA8PAovRjEgOSAwIFIKL0YyIDEwIDAgUgovRjMgMTEgMCBSCi9GNCAxMiAwIFIKL0Y1IDEzIDAgUgovRjYgMTQgMCBSCi9GNyAxNSAwIFIKL0Y4IDE2IDAgUgovRjkgMTcgMCBSCi9GMTAgMTggMCBSCi9GMTEgMTkgMCBSCi9GMTIgMjAgMCBSCi9GMTMgMjEgMCBSCj4+Ci9YT2JqZWN0IDw8Cj4+Cj4+CmVuZG9iagoyMiAwIG9iago8PAovUHJvZHVjZXIgKGpzUERGIDEueC1tYXN0ZXIpCi9DcmVhdGlvbkRhdGUgKEQ6MjAxODA2MTkyMTE2MzAtMDQnMDAnKQo+PgplbmRvYmoKMjMgMCBvYmoKPDwKL1R5cGUgL0NhdGFsb2cKL1BhZ2VzIDEgMCBSCi9PcGVuQWN0aW9uIFszIDAgUiAvRml0SCBudWxsXQovUGFnZUxheW91dCAvT25lQ29sdW1uCj4+CmVuZG9iagp4cmVmCjAgMjQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDA0OTMyIDAwMDAwIG4gCjAwMDAwMDYyNDIgMDAwMDAgbiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDAwMTE4IDAwMDAwIG4gCjAwMDAwMDIxNTIgMDAwMDAgbiAKMDAwMDAwMjI2MSAwMDAwMCBuIAowMDAwMDA0MjgzIDAwMDAwIG4gCjAwMDAwMDQzOTIgMDAwMDAgbiAKMDAwMDAwNTAwMSAwMDAwMCBuIAowMDAwMDA1MDkxIDAwMDAwIG4gCjAwMDAwMDUxODcgMDAwMDAgbiAKMDAwMDAwNTI4NiAwMDAwMCBuIAowMDAwMDA1Mzg5IDAwMDAwIG4gCjAwMDAwMDU0NzggMDAwMDAgbiAKMDAwMDAwNTU3MiAwMDAwMCBuIAowMDAwMDA1NjY5IDAwMDAwIG4gCjAwMDAwMDU3NzAgMDAwMDAgbiAKMDAwMDAwNTg2MyAwMDAwMCBuIAowMDAwMDA1OTU1IDAwMDAwIG4gCjAwMDAwMDYwNDkgMDAwMDAgbiAKMDAwMDAwNjE0NyAwMDAwMCBuIAowMDAwMDA2NDgyIDAwMDAwIG4gCjAwMDAwMDY1NzMgMDAwMDAgbiAKdHJhaWxlcgo8PAovU2l6ZSAyNAovUm9vdCAyMyAwIFIKL0luZm8gMjIgMCBSCj4+CnN0YXJ0eHJlZgo2Njc3CiUlRU9G'
let decodedBase64 = base64.base64Decode(code, 'result-decode.pdf');
console.log(decodedBase64)