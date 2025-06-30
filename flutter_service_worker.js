'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "b8e9046c0d07b8ee59c7806ef49ea19e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "86a181328cbaad0b59e0917bd97bf2f5",
"/": "86a181328cbaad0b59e0917bd97bf2f5",
".git/config": "52b689422144eeaeba3abb691b7c19ac",
".git/index": "a8e1e0fe70133ff72b81a761532e264b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/20/bd2fcc5bd87c70c757802ca7a313300c7ebcb8": "6e6fd22d524b129b5d9ffb2fc66ca93f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/fa/3daab6478d2c3a79b47f44aecd122e9ba68806": "d11a54524e264ade7fe0fe25b08fbfde",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/03/3ddffc89e014f4fb524ae745a6e9161a9536d9": "159746b1041de5803ba14293bf46511a",
".git/objects/5e/a1bcfd58983c71beac15c563d434578bf8ef23": "2b9c2a76b3cf276157dd984654fa03d0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/COMMIT_EDITMSG": "cb84a8b866b7957a80e5be1ac2c715ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/gh-pages": "7ea0eb1a4d07f7ce0f96075ab12dcb58",
".git/refs/remotes/origin/main": "7ea0eb1a4d07f7ce0f96075ab12dcb58",
".git/refs/heads/gh-pages": "7ea0eb1a4d07f7ce0f96075ab12dcb58",
".git/refs/heads/main": "7ea0eb1a4d07f7ce0f96075ab12dcb58",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/logs/refs/remotes/origin/gh-pages": "58a98923fe865a77ae18083b965216d8",
".git/logs/refs/remotes/origin/main": "6d21981f41b0d07f04587cb5fa9eee19",
".git/logs/refs/heads/gh-pages": "0a0d60587f925e6e1fbe7edc5f4a7484",
".git/logs/refs/heads/main": "d425d771410e943a280483d7495d33bc",
".git/logs/HEAD": "de5335ad820e1f42c9b347fb45d6ab1a",
"flutter_bootstrap.js": "91c30eb7eca52bcca78742474f142464",
"manifest.json": "90ead7e6f97417b9329884b1445a297c",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"version.json": "89a5636225bbdddc9e3fd074af0860bb",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/stream_chat_flutter/lib/assets/images/placeholder.png": "30d340bd4f082a7ef08376e916d960d8",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_error.svg": "f16fadef3f135496cac466cb1047959f",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_wut_reaction.svg": "d812a34af414a1239007031d76fdd509",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_left.svg": "f07220f1dbc4ed99105877022f809fa0",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_pen_write.svg": "8f785ba0458d5d137028fe5724aef254",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_check_all.svg": "30c90e1bd4aad756b61c55646948b2f1",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_settings.svg": "b895f9b41094cdefc8aa7975a75bf44c",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_close.svg": "151dc1751f02d199861dd539059272af",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_mic.svg": "0f4127ebec63f063b2b6abe009968bb8",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_close_small.svg": "4bbe300e6de2e0e9156df51190e16e57",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_notification.svg": "9ee0872399694b8fd8f07c2ec73bb748",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_love_reaction.svg": "d2809cb6ba8865bd6dcd7966edb7dce0",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_flag.svg": "c4dfa20d6b1caadf3436c75f9eea145a",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_arrow_right.svg": "9ae306db5f8ae0537ddba1e66c895ed2",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_z.svg": "58faefd3a7d33c04a0c21b9b2234421b",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_standard.svg": "d4b6b0142a2ab49950810334ce91a66d",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_standard.svg": "dd24bb31aaa2b1d5521cf040ce4fe506",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_pptx.svg": "b6e0488aec8aa9fc12f8659582ba68cd",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_spreadsheet_xls.svg": "251f330e13ef834f1e82de10741b0633",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_dat.svg": "747dc6951db9ef398acbfd56b53fd02d",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_sav.svg": "8a8ccc61b4e2182df878f19c51695697",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_standard.svg": "db6cdbea48d173bd8a99f135d7c35cb7",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_html.svg": "8749f8fcb62824f2030d014bdea40edc",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_deb.svg": "31ae53dac6e3c6df1b5eed70261d01ab",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_aac.svg": "7732be41b0b46dbbb631427b90fa2c64",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_csv.svg": "7f0a3dc85a53fa3f7c8ab2cc30a1463d",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_tar.svg": "db1f821052a793ace15f3e58d73d1883",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_special.svg": "f62a6a68281e05bca52fd5c5a92a1087",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_7z.svg": "3bce72a1b1571248064a046442bdf2a7",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_giphy.svg": "524ab87af68824e51971e5f08ab63e7f",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_docx.svg": "c64f81e396e3fd9cd3e07b516f2a2660",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_doc.svg": "179d83d3aeadd45be9900448bde8e32e",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_tar.gz.svg": "f51b3c4a9797362bdea314d7ccd390e6",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_spreadsheet_xlsx.svg": "d66e0a94fcda81662851bb7cd8f1b337",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_imgur.svg": "91066e19e8f51ddf78e960eb0c02b6c5",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_tex.svg": "4a9a1666920111cc43f21315c2c9d8be",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_rpm.svg": "082045bd2e82113643bfce207e234014",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_other_wkq.svg": "54ac89631f76d516209a7b1321b672f7",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_standard.svg": "ceacca50c93c7de9e4a2d80900aa0b92",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_key.svg": "ea19f9b448ed6ec4947d1153868e1f01",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_wdp.svg": "a37150d13a7f25d42e2c0abd2a04800a",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_spreadsheet_standard.svg": "3861ddc6207f9fa975632b114858547f",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_arj.svg": "39b06497abe63b9b610ec2c4398eb11d",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_m4a.svg": "0f2167b79c854aca6a68545691155dff",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_mp3.svg": "6c8afdc4824eacaec07c0e6928c67331",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_pkg.svg": "b9223d57bd53e9d78a1a3ca0fdabbca2",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_pps.svg": "afbe818fa1e086cb87bd6495e0cddd9f",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_rar.svg": "92bb515b58ab223e168f7eec5d888ac8",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_other_special.svg": "e1f0d72e77cc7476c2312a9399d69adb",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_other_pdf.svg": "898bf96ad5091569047807dc7baa02f1",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_db.svg": "c6d2c97c1115a31559bf8f77525c27e4",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_odp.svg": "9e649fe4d544a2422b3794a6ac38ecb4",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_special.svg": "bd2a0269446cda8fa599017cc2e93cff",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_xml.svg": "88cb7255338d7e105f10b4e672b634fe",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_rtf.svg": "586e2527d22df008251641b991d3082c",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_spreadsheet_xlsm.svg": "0f3c9aed2ea725af010e179c99456f52",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_odt.svg": "e4376a93b8c5b272f5caa73d077f36a0",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_alac.svg": "51bf906cbb82d7ed8a5eded4206f5d8a",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_presentation_ppt.svg": "f91b088c80652dff1d8f7cd3a43065ba",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_zip.svg": "a47aad2f585586fcc4e0a0de2938769c",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_txt.svg": "54e98a19d14a19305768d7ce81a2c253",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_standard.svg": "666f9ef2cd205f55267acdadc2971515",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_code_md.svg": "a2ec27e83384f2243ff24d43d4b5b032",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_ogg.svg": "aaee7bd62926cd77b3fa91d9931d7833",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_wav.svg": "4c8b84de66030e8938b3d21bd3859ddc",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_compression_special.svg": "32570557e5e99de85f0893c59297701b",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_spreadsheet_special.svg": "0fafece588cf540f06013f55d7bca0c1",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_spreadsheet_ods.svg": "6da8686e90f41da4211af0edccaaaa85",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_m4b.svg": "958b7a2d6956e6c5669273f21e8a2805",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_aiff.svg": "023e85e0d639f3c734457c182ec1de91",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_text_special.svg": "3f6cd40d71b32cbd981ce9356d492b0c",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_other_standard.svg": "f68550cc7944a226237fbec7f2d8b878",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_flac.svg": "68a6ab5bc81e52a45d529eb94b1b478b",
"assets/packages/stream_chat_flutter/lib/assets/icons/colored/icon_filetype_audio_special.svg": "d8de22f317357d7a35df62ff7cfd3b51",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_thumbs_down_reaction.svg": "53e62bfeb14f7586b42689b63a07c4aa",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_right.svg": "910e4951b29a22f10cedf02dd336db87",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_edit.svg": "8f785ba0458d5d137028fe5724aef254",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_eye.svg": "5e196a456b17186ff27b9179a2ba496f",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_reload.svg": "c07e9431f81627270e9f9362b1dbf999",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_pin.svg": "11624b323b5d8a03108cf5291d8d1353",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_pictures.svg": "49a0332d34fbefa3c2d629342af85459",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_user_remove.svg": "b6832c16828c859f6565a35b46f21c8a",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_camera.svg": "8599462cefa5ff8847b7e7c2f0535ff7",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_record.svg": "8b459abc54cbe474ba374a8cd43e088c",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_copy.svg": "e20fc29361b6f7cc4dc84e42be83a7da",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_reply.svg": "ac55606509699868d12da47121fa6e00",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_retry.svg": "204ed05d0f2a0745ef5518c45650a30d",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_stop.svg": "224128048c91c3a3505e13db1211dffe",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_lol_reaction.svg": "baec6ec52d50bde5485b0b6f0cff9ebd",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_thread_reply.svg": "d3de32551ffb3a553712675f9e599e55",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_share.svg": "ed14604c307d1e0ed234f01fe1b6c6f2",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_moon.svg": "0126da07e3ba678a723e517b16a00868",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_cloud_download.svg": "11ce2071c97c18e4945d21d312f5731a",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_mute.svg": "f6e48f2fcbeb684eaf79cdc140707713",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_link.svg": "409cf82d533a29832dbe4000565fa8fd",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_user_add.svg": "7ef8ea682ad858fc183143537e5bca40",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_pause.svg": "2bce0e0b2180df578022dbd1185de6d7",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_empty_circle_right.svg": "f80f65a6f326e658e75e89dec12f6ceb",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_video_call.svg": "37a0923d8fff7425c75c5c8113d5b441",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_lightning.svg": "ad8eda2b9178cf66a3ca97b91c52ce15",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_files.svg": "40b89e07981549b1c5224dacd8187601",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_time.svg": "caf748b81a236c92542fc267b25a159c",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_award.svg": "ab9128b855bb4e34107a283da64beb09",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_send_message.svg": "3f17f602d33cf04ec47c13a0c506b5b1",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_polls.svg": "301b90a53a038f50b6c4f4e1b74e8433",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_user_delete.svg": "56ce9bde769475b342158b9b204cab34",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_smile.svg": "e815c6968af3ae18cdda3f77079ceffc",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_play.svg": "4f86593696b8bcb2204b651350d9f52f",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_user.svg": "0b9cfbbf17dec7d3a23e2a5c80ada957",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_thumbs_up_reaction.svg": "4c6d1c91d73f2a9b520675e133992e59",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_up.svg": "aeae804efc0b4311366fbc42b0cd53e5",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_group.svg": "477d6d18f41a238efb8b5129f7d56469",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_mentions.svg": "e59e324a4dd4fe9dc2690779c314afec",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_search.svg": "384d2e670111fd85622cf3d7d28fea67",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_down.svg": "6b5cb0fad8cf2af6b40d663f068269dc",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_volume_up.svg": "407092e0926016d3820e7f1270cb6cf7",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_download.svg": "5220f137a75958ad1226015a75d721de",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_check.svg": "a3fd8b5b133ab0fe4918778d82d165ae",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_delete.svg": "a7650f0fb2bb4d4d4e7d658c8fed6704",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_grid.svg": "c08a5c4ca4932a70c9c8d29c69d0fc30",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_menu_point.svg": "158fd4ef86df35c6f4cc69b7bc627d95",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_message.svg": "381c441ea243364fa8961800d24e15ed",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_contacts.svg": "477d6d18f41a238efb8b5129f7d56469",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_check_send.svg": "b36bec7a1c0a99684d73216653000e72",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_circle_up.svg": "1d2ba6cb3063f92e3879d62945837342",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_share_arrow.svg": "99e94ba816ccb29528ffbd379f92006a",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_attach.svg": "2ca2a6ab62cca2f15e7abec0c19f3b70",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_message_unread.svg": "3b47762490f2193bb6b471523ef116a0",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_lock.svg": "5997c3dee21ddd90db5e0e3b5ad42b54",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_user_settings.svg": "b4f22896e4407e41cbd39bce3d8f4ff7",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_save.svg": "c05aa9408d4d5e40418478407f163ac0",
"assets/packages/stream_chat_flutter/lib/assets/icons/icon_send.svg": "7e54e5abbc49632c1f52dfd916d2f16d",
"assets/packages/stream_chat_flutter/lib/assets/animations/typing_dots.json": "3da1c94690095d3a96014b4c695227b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/NOTICES": "b9c3bb21b2fc0a373d4cf569dbd36243",
"assets/AssetManifest.bin.json": "c5fd437beb086ac87edf49c9a904796a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "bba22d48a4eba50306e2c3779f0b212e",
"assets/FontManifest.json": "d327cc839e1598b573fd4895dcbda113",
"assets/AssetManifest.json": "857afab0136de9d11e8d345b55163cfe",
"assets/AssetManifest.bin": "fd584b42862d9fb4ee54f2d6adbd5613",
"assets/assets/videos/profile_vid3.mp4": "5f1e8d26939158d10aeed2720a9f465d",
"assets/assets/videos/profile_vid2.mp4": "d313f859ff6ea28990eb37d29860795c",
"assets/assets/videos/profile_vid1.mp4": "110b2b25988ea99a6cd7d87816e149fe",
"assets/assets/NOTICES": "b9c3bb21b2fc0a373d4cf569dbd36243",
"assets/assets/support_group.png": "e04c4b3080f597703e2e70fa1962cfe9",
"assets/assets/AssetManifest.bin.json": "473adaa438e2e0832bbfc38cda09d238",
"assets/assets/filter.png": "785b8b34cdbda44864a8e78740ae5825",
"assets/assets/therapist_welcome_page_3.png": "54fa3c655711adc94f435e9187803826",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/MaterialIcons-Regular.otf": "bba22d48a4eba50306e2c3779f0b212e",
"assets/assets/FontManifest.json": "d327cc839e1598b573fd4895dcbda113",
"assets/assets/therapist_1.png": "14eecd0d91ad91f50fd64a134578c466",
"assets/assets/icons/share_icon.png": "7d93f4ba581369a1537d413229c32f3d",
"assets/assets/icons/like_icon.png": "ec6e55352e166eae2fe62267abafb137",
"assets/assets/icons/save_icon.png": "9bf2f735d3da6b908f724c593921f9ef",
"assets/assets/icons/write_article_icon.png": "4a55dbc0835e93b2ac0a7acfb1103ba7",
"assets/assets/icons/calendar_icon.png": "a6e68de4f36fb3e29bb8c0830a946103",
"assets/assets/icons/like_filled.png": "6be4641ae98321df6789310e25fef3fe",
"assets/assets/icons/insightful_icon.png": "586d9edc7cb0fc6b988433db3b287e4f",
"assets/assets/icons/support_filled.png": "11121744288184c8bbed03faa34c724a",
"assets/assets/icons/upload_button.png": "4ebc1ac91eba6c7b09b9b05d9b90abc2",
"assets/assets/icons/support_icon.png": "67263ab0cef5d0abb36c357b0c67ebff",
"assets/assets/icons/aloe.png": "e004a8f3a9d6114ed0c691fde708e12c",
"assets/assets/icons/message_icon.png": "480ecc779d19045d1a2f552a6546fa83",
"assets/assets/icons/insightful_filled.png": "ebce4320af93ab8c3b1e6916ebb6502c",
"assets/assets/AssetManifest.json": "166bf4b15f889a3514ab1581ebd07113",
"assets/assets/AssetManifest.bin": "ece4bcc1981c1da714b9245310c27d38",
"assets/assets/image_one.png": "91035d2839bafce62cb778b84708e53a",
"assets/assets/therapist_welcome_page.png": "0227ea0ab574b4f6dffb5b826ff228c9",
"assets/assets/cart.png": "500680d3efa407dfdf8299e165c9c17b",
"assets/assets/explore_pic1.png": "5eebe764ec6b2bc2c85b430b1c72ea77",
"assets/assets/emojis/basketball.png": "e258c6de46fc5b692c143a51858ff9bc",
"assets/assets/emojis/archery.png": "1e910ec4d366838c6939025d4db3913d",
"assets/assets/emojis/surfing.png": "da7d7aa28f7219a13bd11b811b419f1c",
"assets/assets/emojis/kiting.png": "0bfc5262d5f10c3fc18e03b73582b000",
"assets/assets/emojis/parties.png": "b6ec83cd356cc800bf7000556cccc379",
"assets/assets/emojis/ice_skating.png": "67686fb95166f21cb16cd3de5ad71f1b",
"assets/assets/emojis/rocket.png": "387df224e99eee9927d51c6378a90062",
"assets/assets/emojis/tennis.png": "17c1779883348c1ac8c16045da1a54fe",
"assets/assets/emojis/reading.png": "cae61f8397bc0f416dd171406710f7f0",
"assets/assets/emojis/camping.png": "2f397a0f20fbb43cbc16740a82cda4fb",
"assets/assets/emojis/running.png": "157f59f226e4b4e2c664e5c011355cb5",
"assets/assets/emojis/diy.png": "a2896c03f3f7e892d1f6e4d302776608",
"assets/assets/emojis/volleyball.png": "5d4d9188e1aff932f79938a346d6cf3f",
"assets/assets/emojis/baseball.png": "78417d6eb8cf7b612e39a699b1992b1c",
"assets/assets/emojis/nature.png": "25b5b1c8dcac4d3f006f77dd4b2871c3",
"assets/assets/emojis/music.png": "e0512fa58a05612fad4fb649636f82eb",
"assets/assets/emojis/drawing.png": "cef221599f8f340cdef52e6863e3c942",
"assets/assets/emojis/lacrosse.png": "3e6c8bcdf618c4e78341c9d946cb2309",
"assets/assets/emojis/bowling.png": "339d4162d172b02192b86f9b26e43986",
"assets/assets/emojis/cooking.png": "333c292633b1f107c34aa97430a46215",
"assets/assets/emojis/football.png": "91cfd59d4b21ccca9bc1175db015efed",
"assets/assets/emojis/yoga.png": "92710a2bc6ec581fc2f8e6ded34e8125",
"assets/assets/emojis/watching_shows.png": "a501b72238c98f455f60dc3f2f8b270c",
"assets/assets/emojis/singing.png": "774efc84b83eb6ad1e3febacdb818052",
"assets/assets/emojis/photography.png": "902ca2555c9973913ca70d45fe5a0961",
"assets/assets/emojis/travelling.png": "40cdb803a2ce84393cee007050a44252",
"assets/assets/emojis/skiing.png": "4af3b60b6aa708db9dcfa7e7b8e24d05",
"assets/assets/emojis/hiking.png": "c8436232efdf5307ef5351315174fe3c",
"assets/assets/emojis/foodie.png": "1cdc35c2d22f9c7400e3f1e91d4f6d58",
"assets/assets/emojis/dancing.png": "e7fcfa62ff693644fcce3040502e8350",
"assets/assets/emojis/rugby.png": "be2dfd124f59bb6b798edbfa1c11b474",
"assets/assets/emojis/golf.png": "ec8deeeb492b6e0a7aed1d5574402329",
"assets/assets/emojis/frisbee.png": "8459917dd22938289f2adb484b084d26",
"assets/assets/emojis/boxing.png": "16450edbab997e11b722b43e42e752bd",
"assets/assets/emojis/painting.png": "cde8f2f59540cd710d482b550d0a775a",
"assets/assets/emojis/badminton.png": "aadea483186150150c70ea2e12cee4e6",
"assets/assets/emojis/jigsaw.png": "d1042d94f06d30daea1dba9ac5d652c0",
"assets/assets/emojis/gaming.png": "6c2aecd1fc44e658f6fdb4e004782bf7",
"assets/assets/emojis/baking.png": "8183f9ea70531c83843c09fa813db429",
"assets/assets/emojis/shopping.png": "2f994fc968355a312d668e34175f079c",
"assets/assets/emojis/church.png": "ffee29ca499ef7141e1dd30af1929319",
"assets/assets/emojis/martial_arts.png": "751efa27d457873d6b83a85c6fd8f363",
"assets/assets/emojis/wine_tasting.png": "77cc075f1522f0a8c02b304b9744bd02",
"assets/assets/emojis/gardening.png": "e9ea71eec11e96f05744ba1566419a39",
"assets/assets/emojis/table_tennis.png": "37cef5059b45336d7bc18faa22ea2560",
"assets/assets/emojis/sailing.png": "0418327e4184f8ad53708ce61b361653",
"assets/assets/emojis/writing.png": "c151dba68709ed1b0c613e6223dc2b53",
"assets/assets/emojis/climbing.png": "8af1c7eec6a6092dc388cd58ae0d55b5",
"assets/assets/emojis/comedy.png": "de3e78dd647bf9eaca3b49d3dbf50dd5",
"assets/assets/emojis/hockey.png": "6c3b027c4c534f60bf3c8de54f219c95",
"assets/assets/emojis/snorkeling.png": "db6e8e2282993e2962f1768cabdf9158",
"assets/assets/emojis/fishing.png": "54d93367dd0d4b9f93106dc03defac91",
"assets/assets/emojis/sledding.png": "e1d8dfe42ac5147f654ed6b8bf961fb0",
"assets/assets/emojis/horse_riding.png": "a2085c556de17033b2707f9291549671",
"assets/assets/emojis/windsurfing.png": "7c44409e8655152ca4b8f288ed99eb2f",
"assets/assets/emojis/sewing.png": "93735911eb33a9cc6186353804cca959",
"assets/assets/emojis/celebrations.png": "c9306fb689e2d201068dcf50f84a327d",
"assets/assets/mentalgym.png": "57cc83212737470c8b91678325cf94a2",
"assets/assets/finding_a_therapist.png": "452c11d719c8c5954a54654ded9b740e",
"assets/assets/starting_journey.png": "390e18fc532a9606bc68b0a4e9ae6f46",
"assets/assets/therapist_welcome_page_2.png": "e142f12d1964fb48463232a1d875f844",
"assets/assets/handshake.png": "b2fd114853f26aac1510ce091d8922c0",
"assets/assets/dj_therapist.png": "d7dccfd2fdae4ee3c78d741a6467df1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
