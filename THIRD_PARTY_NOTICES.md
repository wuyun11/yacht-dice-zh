# 来源与第三方许可

## 上游项目

本项目是 [Smooth Pudding / yacht-evaluator-api](https://github.com/mat-der-D/yacht-evaluator-api) 的中文离线改编。求解方法、计分表状态编码和预计算策略文件来自该项目。上游版权为 **Copyright (c) 2025 Smooth Pudding**，采用 MIT 许可；完整文本保留在 [vendor/upstream-LICENSE](vendor/upstream-LICENSE)。

本版的主要改动是重做中文界面、将服务端求解迁移为本机 Web Worker、采用有界的当前局面缓存，并加入局面保存、导入导出、撤销、练习模式和 Tauri 桌面打包。本仓库的 MIT 许可不替代第三方组件自身的许可。

策略文件 public/yacht_exp.bin 的 SHA-256：

`029f4a2c69259356c15c157b58623fe1b80333fd217ab464ce6e754718519214`

参考的上游提交：[5f6370689fe797fc4570e4fdeb531310987a7b0e](https://github.com/mat-der-D/yacht-evaluator-api/tree/5f6370689fe797fc4570e4fdeb531310987a7b0e)。原版网页界面可参见 [yacht-evaluator-web](https://github.com/mat-der-D/yacht-evaluator-web)。

## 依赖组件

下表由本次 Windows 构建使用的 JavaScript 运行依赖和 Rust 编译依赖生成（Rust 列表包含构建工具）。各包随附的 LICENSE、COPYING、COPYRIGHT、NOTICE 文件保留在 vendor/licenses 中。依赖源码未作修改，可从各包的来源链接按指定版本获取。许可字段中有多种可选许可时，以其完整许可文本为准。

| 组件 | 版本 | 许可声明 | 来源与附带声明 |
| --- | --- | --- | --- |
| react | 19.2.0 | MIT | [源码](https://www.npmjs.com/package/react/v/19.2.0) · [许可文件](vendor/licenses/npm/react) |
| react-dom | 19.2.0 | MIT | [源码](https://www.npmjs.com/package/react-dom/v/19.2.0) · [许可文件](vendor/licenses/npm/react-dom) |
| scheduler | 0.27.0 | MIT | [源码](https://www.npmjs.com/package/scheduler/v/0.27.0) · [许可文件](vendor/licenses/npm/scheduler) |
| adler2 | 2.0.1 | 0BSD OR MIT OR Apache-2.0 | [源码](https://crates.io/crates/adler2/2.0.1) · [许可文件](vendor/licenses/rust/adler2-2.0.1) |
| aho-corasick | 1.1.5 | Unlicense OR MIT | [源码](https://crates.io/crates/aho-corasick/1.1.5) · [许可文件](vendor/licenses/rust/aho-corasick-1.1.5) |
| alloc-no-stdlib | 3.0.0 | BSD-3-Clause | [源码](https://crates.io/crates/alloc-no-stdlib/3.0.0) · [许可文件](vendor/licenses/rust/alloc-no-stdlib-3.0.0) |
| alloc-stdlib | 0.3.0 | BSD-3-Clause | [源码](https://crates.io/crates/alloc-stdlib/0.3.0) · [许可文件](vendor/licenses/rust/alloc-stdlib-0.3.0) |
| anyhow | 1.0.104 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/anyhow/1.0.104) · [许可文件](vendor/licenses/rust/anyhow-1.0.104) |
| autocfg | 1.5.1 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/autocfg/1.5.1) · [许可文件](vendor/licenses/rust/autocfg-1.5.1) |
| base64 | 0.23.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/base64/0.23.1) · [许可文件](vendor/licenses/rust/base64-0.23.1) |
| bit-set | 0.8.0 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/bit-set/0.8.0) · [许可文件](vendor/licenses/rust/bit-set-0.8.0) |
| bit-vec | 0.8.0 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/bit-vec/0.8.0) · [许可文件](vendor/licenses/rust/bit-vec-0.8.0) |
| bitflags | 1.3.2 | MIT/Apache-2.0 | [源码](https://crates.io/crates/bitflags/1.3.2) · [许可文件](vendor/licenses/rust/bitflags-1.3.2) |
| bitflags | 2.13.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/bitflags/2.13.2) · [许可文件](vendor/licenses/rust/bitflags-2.13.2) |
| block-buffer | 0.10.4 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/block-buffer/0.10.4) · [许可文件](vendor/licenses/rust/block-buffer-0.10.4) |
| brotli | 9.0.0 | BSD-3-Clause AND MIT | [源码](https://crates.io/crates/brotli/9.0.0) · [许可文件](vendor/licenses/rust/brotli-9.0.0) |
| brotli-decompressor | 6.0.1 | BSD-3-Clause/MIT | [源码](https://crates.io/crates/brotli-decompressor/6.0.1) · [许可文件](vendor/licenses/rust/brotli-decompressor-6.0.1) |
| byteorder | 1.5.0 | Unlicense OR MIT | [源码](https://crates.io/crates/byteorder/1.5.0) · [许可文件](vendor/licenses/rust/byteorder-1.5.0) |
| bytes | 1.12.1 | MIT | [源码](https://crates.io/crates/bytes/1.12.1) · [许可文件](vendor/licenses/rust/bytes-1.12.1) |
| camino | 1.2.6 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/camino/1.2.6) · [许可文件](vendor/licenses/rust/camino-1.2.6) |
| cargo_metadata | 0.19.2 | MIT | [源码](https://crates.io/crates/cargo_metadata/0.19.2) · [许可文件](vendor/licenses/rust/cargo_metadata-0.19.2) |
| cargo_toml | 1.0.1 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/cargo_toml/1.0.1) · [许可文件](vendor/licenses/rust/cargo_toml-1.0.1) |
| cargo-platform | 0.1.9 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/cargo-platform/0.1.9) · [许可文件](vendor/licenses/rust/cargo-platform-0.1.9) |
| cc | 1.9.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/cc/1.9.0) · [许可文件](vendor/licenses/rust/cc-1.9.0) |
| cfb | 0.14.0 | MIT | [源码](https://crates.io/crates/cfb/0.14.0) · [许可文件](vendor/licenses/rust/cfb-0.14.0) |
| cfg-if | 1.0.5 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/cfg-if/1.0.5) · [许可文件](vendor/licenses/rust/cfg-if-1.0.5) |
| cookie | 0.18.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/cookie/0.18.2) · [许可文件](vendor/licenses/rust/cookie-0.18.2) |
| cpufeatures | 0.2.17 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/cpufeatures/0.2.17) · [许可文件](vendor/licenses/rust/cpufeatures-0.2.17) |
| crc32fast | 1.5.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/crc32fast/1.5.3) · [许可文件](vendor/licenses/rust/crc32fast-1.5.3) |
| crossbeam-channel | 0.5.17 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/crossbeam-channel/0.5.17) · [许可文件](vendor/licenses/rust/crossbeam-channel-0.5.17) |
| crossbeam-utils | 0.8.23 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/crossbeam-utils/0.8.23) · [许可文件](vendor/licenses/rust/crossbeam-utils-0.8.23) |
| crypto-common | 0.1.7 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/crypto-common/0.1.7) · [许可文件](vendor/licenses/rust/crypto-common-0.1.7) |
| cssparser | 0.37.0 | MPL-2.0 | [源码](https://crates.io/crates/cssparser/0.37.0) · [许可文件](vendor/licenses/rust/cssparser-0.37.0) |
| cssparser-macros | 0.7.1 | MPL-2.0 | [源码](https://crates.io/crates/cssparser-macros/0.7.1) · [许可文件](vendor/licenses/rust/cssparser-macros-0.7.1) |
| ctor | 1.0.13 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/ctor/1.0.13) · [许可文件](vendor/licenses/rust/ctor-1.0.13) |
| darling | 0.24.1 | MIT | [源码](https://crates.io/crates/darling/0.24.1) · [许可文件](vendor/licenses/rust/darling-0.24.1) |
| darling_core | 0.24.1 | MIT | [源码](https://crates.io/crates/darling_core/0.24.1) · [许可文件](vendor/licenses/rust/darling_core-0.24.1) |
| darling_macro | 0.24.1 | MIT | [源码](https://crates.io/crates/darling_macro/0.24.1) · [许可文件](vendor/licenses/rust/darling_macro-0.24.1) |
| deranged | 0.5.9 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/deranged/0.5.9) · [许可文件](vendor/licenses/rust/deranged-0.5.9) |
| derive_more | 2.1.1 | MIT | [源码](https://crates.io/crates/derive_more/2.1.1) · [许可文件](vendor/licenses/rust/derive_more-2.1.1) |
| derive_more-impl | 2.1.1 | MIT | [源码](https://crates.io/crates/derive_more-impl/2.1.1) · [许可文件](vendor/licenses/rust/derive_more-impl-2.1.1) |
| digest | 0.10.7 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/digest/0.10.7) · [许可文件](vendor/licenses/rust/digest-0.10.7) |
| dirs | 7.0.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/dirs/7.0.0) · [许可文件](vendor/licenses/rust/dirs-7.0.0) |
| dirs-sys | 0.5.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/dirs-sys/0.5.0) · [许可文件](vendor/licenses/rust/dirs-sys-0.5.0) |
| displaydoc | 0.2.7 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/displaydoc/0.2.7) · [许可文件](vendor/licenses/rust/displaydoc-0.2.7) |
| dom_query | 0.28.0 | MIT | [源码](https://crates.io/crates/dom_query/0.28.0) · [许可文件](vendor/licenses/rust/dom_query-0.28.0) |
| dpi | 0.1.2 | Apache-2.0 AND MIT | [源码](https://crates.io/crates/dpi/0.1.2) · [许可文件](vendor/licenses/rust/dpi-0.1.2) |
| dtoa | 1.0.11 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/dtoa/1.0.11) · [许可文件](vendor/licenses/rust/dtoa-1.0.11) |
| dtoa-short | 0.3.5 | MPL-2.0 | [源码](https://crates.io/crates/dtoa-short/0.3.5) · [许可文件](vendor/licenses/rust/dtoa-short-0.3.5) |
| dunce | 1.0.5 | CC0-1.0 OR MIT-0 OR Apache-2.0 | [源码](https://crates.io/crates/dunce/1.0.5) · [许可文件](vendor/licenses/rust/dunce-1.0.5) |
| dyn-clone | 1.0.20 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/dyn-clone/1.0.20) · [许可文件](vendor/licenses/rust/dyn-clone-1.0.20) |
| embed-resource | 3.0.12 | MIT | [源码](https://crates.io/crates/embed-resource/3.0.12) · [许可文件](vendor/licenses/rust/embed-resource-3.0.12) |
| equivalent | 1.0.3 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/equivalent/1.0.3) · [许可文件](vendor/licenses/rust/equivalent-1.0.3) |
| erased-serde | 0.4.10 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/erased-serde/0.4.10) · [许可文件](vendor/licenses/rust/erased-serde-0.4.10) |
| fastrand | 2.5.0 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/fastrand/2.5.0) · [许可文件](vendor/licenses/rust/fastrand-2.5.0) |
| fdeflate | 0.3.7 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/fdeflate/0.3.7) · [许可文件](vendor/licenses/rust/fdeflate-0.3.7) |
| find-msvc-tools | 0.1.15 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/find-msvc-tools/0.1.15) · [许可文件](vendor/licenses/rust/find-msvc-tools-0.1.15) |
| flate2 | 1.1.10 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/flate2/1.1.10) · [许可文件](vendor/licenses/rust/flate2-1.1.10) |
| fnv | 1.0.7 | Apache-2.0 / MIT | [源码](https://crates.io/crates/fnv/1.0.7) · [许可文件](vendor/licenses/rust/fnv-1.0.7) |
| foldhash | 0.2.0 | Zlib | [源码](https://crates.io/crates/foldhash/0.2.0) · [许可文件](vendor/licenses/rust/foldhash-0.2.0) |
| form_urlencoded | 1.2.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/form_urlencoded/1.2.2) · [许可文件](vendor/licenses/rust/form_urlencoded-1.2.2) |
| generic-array | 0.14.7 | MIT | [源码](https://crates.io/crates/generic-array/0.14.7) · [许可文件](vendor/licenses/rust/generic-array-0.14.7) |
| getrandom | 0.3.4 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/getrandom/0.3.4) · [许可文件](vendor/licenses/rust/getrandom-0.3.4) |
| getrandom | 0.4.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/getrandom/0.4.3) · [许可文件](vendor/licenses/rust/getrandom-0.4.3) |
| glob | 0.3.4 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/glob/0.3.4) · [许可文件](vendor/licenses/rust/glob-0.3.4) |
| hashbrown | 0.12.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/hashbrown/0.12.3) · [许可文件](vendor/licenses/rust/hashbrown-0.12.3) |
| hashbrown | 0.17.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/hashbrown/0.17.1) · [许可文件](vendor/licenses/rust/hashbrown-0.17.1) |
| heck | 0.5.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/heck/0.5.0) · [许可文件](vendor/licenses/rust/heck-0.5.0) |
| html5ever | 0.39.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/html5ever/0.39.0) · [许可文件](vendor/licenses/rust/html5ever-0.39.0) |
| http | 1.5.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/http/1.5.0) · [许可文件](vendor/licenses/rust/http-1.5.0) |
| ico | 0.5.0 | MIT | [源码](https://crates.io/crates/ico/0.5.0) · [许可文件](vendor/licenses/rust/ico-0.5.0) |
| icu_collections | 2.3.0 | Unicode-3.0 | [源码](https://crates.io/crates/icu_collections/2.3.0) · [许可文件](vendor/licenses/rust/icu_collections-2.3.0) |
| icu_locale_core | 2.3.0 | Unicode-3.0 | [源码](https://crates.io/crates/icu_locale_core/2.3.0) · [许可文件](vendor/licenses/rust/icu_locale_core-2.3.0) |
| icu_normalizer | 2.3.0 | Unicode-3.0 | [源码](https://crates.io/crates/icu_normalizer/2.3.0) · [许可文件](vendor/licenses/rust/icu_normalizer-2.3.0) |
| icu_normalizer_data | 2.3.0 | Unicode-3.0 | [源码](https://crates.io/crates/icu_normalizer_data/2.3.0) · [许可文件](vendor/licenses/rust/icu_normalizer_data-2.3.0) |
| icu_properties | 2.3.0 | Unicode-3.0 | [源码](https://crates.io/crates/icu_properties/2.3.0) · [许可文件](vendor/licenses/rust/icu_properties-2.3.0) |
| icu_properties_data | 2.3.0 | Unicode-3.0 | [源码](https://crates.io/crates/icu_properties_data/2.3.0) · [许可文件](vendor/licenses/rust/icu_properties_data-2.3.0) |
| icu_provider | 2.3.1 | Unicode-3.0 | [源码](https://crates.io/crates/icu_provider/2.3.1) · [许可文件](vendor/licenses/rust/icu_provider-2.3.1) |
| ident_case | 1.0.1 | MIT/Apache-2.0 | [源码](https://crates.io/crates/ident_case/1.0.1) · [许可文件](vendor/licenses/rust/ident_case-1.0.1) |
| idna | 1.1.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/idna/1.1.0) · [许可文件](vendor/licenses/rust/idna-1.1.0) |
| idna_adapter | 1.2.2 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/idna_adapter/1.2.2) · [许可文件](vendor/licenses/rust/idna_adapter-1.2.2) |
| indexmap | 1.9.3 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/indexmap/1.9.3) · [许可文件](vendor/licenses/rust/indexmap-1.9.3) |
| indexmap | 2.14.2 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/indexmap/2.14.2) · [许可文件](vendor/licenses/rust/indexmap-2.14.2) |
| infer | 0.22.0 | MIT | [源码](https://crates.io/crates/infer/0.22.0) · [许可文件](vendor/licenses/rust/infer-0.22.0) |
| itoa | 1.0.18 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/itoa/1.0.18) · [许可文件](vendor/licenses/rust/itoa-1.0.18) |
| json-patch | 4.2.0 | MIT/Apache-2.0 | [源码](https://crates.io/crates/json-patch/4.2.0) · [许可文件](vendor/licenses/rust/json-patch-4.2.0) |
| jsonptr | 0.7.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/jsonptr/0.7.1) · [许可文件](vendor/licenses/rust/jsonptr-0.7.1) |
| keyboard-types | 0.8.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/keyboard-types/0.8.3) · [许可文件](vendor/licenses/rust/keyboard-types-0.8.3) |
| libc | 0.2.191 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/libc/0.2.191) · [许可文件](vendor/licenses/rust/libc-0.2.191) |
| litemap | 0.8.3 | Unicode-3.0 | [源码](https://crates.io/crates/litemap/0.8.3) · [许可文件](vendor/licenses/rust/litemap-0.8.3) |
| lock_api | 0.4.14 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/lock_api/0.4.14) · [许可文件](vendor/licenses/rust/lock_api-0.4.14) |
| log | 0.4.34 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/log/0.4.34) · [许可文件](vendor/licenses/rust/log-0.4.34) |
| markup5ever | 0.39.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/markup5ever/0.39.0) · [许可文件](vendor/licenses/rust/markup5ever-0.39.0) |
| memchr | 2.8.3 | Unlicense OR MIT | [源码](https://crates.io/crates/memchr/2.8.3) · [许可文件](vendor/licenses/rust/memchr-2.8.3) |
| mime | 0.3.17 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/mime/0.3.17) · [许可文件](vendor/licenses/rust/mime-0.3.17) |
| miniz_oxide | 0.8.9 | MIT OR Zlib OR Apache-2.0 | [源码](https://crates.io/crates/miniz_oxide/0.8.9) · [许可文件](vendor/licenses/rust/miniz_oxide-0.8.9) |
| miniz_oxide | 0.9.1 | MIT OR Zlib OR Apache-2.0 | [源码](https://crates.io/crates/miniz_oxide/0.9.1) · [许可文件](vendor/licenses/rust/miniz_oxide-0.9.1) |
| muda | 0.20.0 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/muda/0.20.0) · [许可文件](vendor/licenses/rust/muda-0.20.0) |
| new_debug_unreachable | 1.0.6 | MIT | [源码](https://crates.io/crates/new_debug_unreachable/1.0.6) · [许可文件](vendor/licenses/rust/new_debug_unreachable-1.0.6) |
| num-conv | 0.2.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/num-conv/0.2.2) · [许可文件](vendor/licenses/rust/num-conv-0.2.2) |
| once_cell | 1.21.4 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/once_cell/1.21.4) · [许可文件](vendor/licenses/rust/once_cell-1.21.4) |
| option-ext | 0.2.0 | MPL-2.0 | [源码](https://crates.io/crates/option-ext/0.2.0) · [许可文件](vendor/licenses/rust/option-ext-0.2.0) |
| parking_lot | 0.12.5 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/parking_lot/0.12.5) · [许可文件](vendor/licenses/rust/parking_lot-0.12.5) |
| parking_lot_core | 0.9.12 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/parking_lot_core/0.9.12) · [许可文件](vendor/licenses/rust/parking_lot_core-0.9.12) |
| percent-encoding | 2.3.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/percent-encoding/2.3.2) · [许可文件](vendor/licenses/rust/percent-encoding-2.3.2) |
| phf | 0.13.1 | MIT | [源码](https://crates.io/crates/phf/0.13.1) · [许可文件](vendor/licenses/rust/phf-0.13.1) |
| phf_codegen | 0.13.1 | MIT | [源码](https://crates.io/crates/phf_codegen/0.13.1) · [许可文件](vendor/licenses/rust/phf_codegen-0.13.1) |
| phf_generator | 0.13.1 | MIT | [源码](https://crates.io/crates/phf_generator/0.13.1) · [许可文件](vendor/licenses/rust/phf_generator-0.13.1) |
| phf_macros | 0.13.1 | MIT | [源码](https://crates.io/crates/phf_macros/0.13.1) · [许可文件](vendor/licenses/rust/phf_macros-0.13.1) |
| phf_shared | 0.13.1 | MIT | [源码](https://crates.io/crates/phf_shared/0.13.1) · [许可文件](vendor/licenses/rust/phf_shared-0.13.1) |
| pin-project-lite | 0.2.17 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/pin-project-lite/0.2.17) · [许可文件](vendor/licenses/rust/pin-project-lite-0.2.17) |
| plist | 1.10.2 | MIT | [源码](https://crates.io/crates/plist/1.10.2) · [许可文件](vendor/licenses/rust/plist-1.10.2) |
| png | 0.17.16 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/png/0.17.16) · [许可文件](vendor/licenses/rust/png-0.17.16) |
| png | 0.18.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/png/0.18.1) · [许可文件](vendor/licenses/rust/png-0.18.1) |
| potential_utf | 0.1.6 | Unicode-3.0 | [源码](https://crates.io/crates/potential_utf/0.1.6) · [许可文件](vendor/licenses/rust/potential_utf-0.1.6) |
| powerfmt | 0.2.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/powerfmt/0.2.1) · [许可文件](vendor/licenses/rust/powerfmt-0.2.1) |
| precomputed-hash | 0.1.1 | MIT | [源码](https://crates.io/crates/precomputed-hash/0.1.1) · [许可文件](vendor/licenses/rust/precomputed-hash-0.1.1) |
| proc-macro2 | 1.0.107 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/proc-macro2/1.0.107) · [许可文件](vendor/licenses/rust/proc-macro2-1.0.107) |
| quick-xml | 0.42.0 | MIT | [源码](https://crates.io/crates/quick-xml/0.42.0) · [许可文件](vendor/licenses/rust/quick-xml-0.42.0) |
| quote | 1.0.47 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/quote/1.0.47) · [许可文件](vendor/licenses/rust/quote-1.0.47) |
| raw-window-handle | 0.6.2 | MIT OR Apache-2.0 OR Zlib | [源码](https://crates.io/crates/raw-window-handle/0.6.2) · [许可文件](vendor/licenses/rust/raw-window-handle-0.6.2) |
| regex | 1.13.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/regex/1.13.1) · [许可文件](vendor/licenses/rust/regex-1.13.1) |
| regex-automata | 0.4.18 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/regex-automata/0.4.18) · [许可文件](vendor/licenses/rust/regex-automata-0.4.18) |
| regex-syntax | 0.8.11 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/regex-syntax/0.8.11) · [许可文件](vendor/licenses/rust/regex-syntax-0.8.11) |
| rustc_version | 0.4.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/rustc_version/0.4.1) · [许可文件](vendor/licenses/rust/rustc_version-0.4.1) |
| rustc-hash | 2.1.3 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/rustc-hash/2.1.3) · [许可文件](vendor/licenses/rust/rustc-hash-2.1.3) |
| same-file | 1.0.6 | Unlicense/MIT | [源码](https://crates.io/crates/same-file/1.0.6) · [许可文件](vendor/licenses/rust/same-file-1.0.6) |
| schemars | 0.8.22 | MIT | [源码](https://crates.io/crates/schemars/0.8.22) · [许可文件](vendor/licenses/rust/schemars-0.8.22) |
| schemars_derive | 0.8.22 | MIT | [源码](https://crates.io/crates/schemars_derive/0.8.22) · [许可文件](vendor/licenses/rust/schemars_derive-0.8.22) |
| scopeguard | 1.2.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/scopeguard/1.2.0) · [许可文件](vendor/licenses/rust/scopeguard-1.2.0) |
| selectors | 0.38.0 | MPL-2.0 | [源码](https://crates.io/crates/selectors/0.38.0) · [许可文件](vendor/licenses/rust/selectors-0.38.0) |
| semver | 1.0.28 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/semver/1.0.28) · [许可文件](vendor/licenses/rust/semver-1.0.28) |
| serde | 1.0.229 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde/1.0.229) · [许可文件](vendor/licenses/rust/serde-1.0.229) |
| serde_core | 1.0.229 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_core/1.0.229) · [许可文件](vendor/licenses/rust/serde_core-1.0.229) |
| serde_derive | 1.0.229 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_derive/1.0.229) · [许可文件](vendor/licenses/rust/serde_derive-1.0.229) |
| serde_derive_internals | 0.29.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_derive_internals/0.29.1) · [许可文件](vendor/licenses/rust/serde_derive_internals-0.29.1) |
| serde_json | 1.0.154 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_json/1.0.154) · [许可文件](vendor/licenses/rust/serde_json-1.0.154) |
| serde_repr | 0.1.21 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_repr/0.1.21) · [许可文件](vendor/licenses/rust/serde_repr-0.1.21) |
| serde_spanned | 1.1.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_spanned/1.1.2) · [许可文件](vendor/licenses/rust/serde_spanned-1.1.2) |
| serde_with | 3.24.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_with/3.24.0) · [许可文件](vendor/licenses/rust/serde_with-3.24.0) |
| serde_with_macros | 3.24.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde_with_macros/3.24.0) · [许可文件](vendor/licenses/rust/serde_with_macros-3.24.0) |
| serde-untagged | 0.1.9 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serde-untagged/0.1.9) · [许可文件](vendor/licenses/rust/serde-untagged-0.1.9) |
| serialize-to-javascript | 0.1.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serialize-to-javascript/0.1.2) · [许可文件](vendor/licenses/rust/serialize-to-javascript-0.1.2) |
| serialize-to-javascript-impl | 0.1.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/serialize-to-javascript-impl/0.1.2) · [许可文件](vendor/licenses/rust/serialize-to-javascript-impl-0.1.2) |
| servo_arc | 0.4.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/servo_arc/0.4.3) · [许可文件](vendor/licenses/rust/servo_arc-0.4.3) |
| sha2 | 0.10.9 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/sha2/0.10.9) · [许可文件](vendor/licenses/rust/sha2-0.10.9) |
| shlex | 2.0.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/shlex/2.0.1) · [许可文件](vendor/licenses/rust/shlex-2.0.1) |
| simd-adler32 | 0.3.10 | MIT | [源码](https://crates.io/crates/simd-adler32/0.3.10) · [许可文件](vendor/licenses/rust/simd-adler32-0.3.10) |
| siphasher | 1.0.4 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/siphasher/1.0.4) · [许可文件](vendor/licenses/rust/siphasher-1.0.4) |
| smallvec | 1.16.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/smallvec/1.16.3) · [许可文件](vendor/licenses/rust/smallvec-1.16.3) |
| softbuffer | 0.4.8 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/softbuffer/0.4.8) · [许可文件](vendor/licenses/rust/softbuffer-0.4.8) |
| stable_deref_trait | 1.2.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/stable_deref_trait/1.2.1) · [许可文件](vendor/licenses/rust/stable_deref_trait-1.2.1) |
| static_vcruntime | 3.0.0 | MIT OR Apache-2.0 OR Zlib | [源码](https://crates.io/crates/static_vcruntime/3.0.0) · [许可文件](vendor/licenses/rust/static_vcruntime-3.0.0) |
| string_cache | 0.9.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/string_cache/0.9.0) · [许可文件](vendor/licenses/rust/string_cache-0.9.0) |
| string_cache_codegen | 0.6.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/string_cache_codegen/0.6.1) · [许可文件](vendor/licenses/rust/string_cache_codegen-0.6.1) |
| strsim | 0.11.1 | MIT | [源码](https://crates.io/crates/strsim/0.11.1) · [许可文件](vendor/licenses/rust/strsim-0.11.1) |
| syn | 2.0.119 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/syn/2.0.119) · [许可文件](vendor/licenses/rust/syn-2.0.119) |
| syn | 3.0.9 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/syn/3.0.9) · [许可文件](vendor/licenses/rust/syn-3.0.9) |
| synstructure | 0.14.0 | MIT | [源码](https://crates.io/crates/synstructure/0.14.0) · [许可文件](vendor/licenses/rust/synstructure-0.14.0) |
| tao | 0.37.1 | Apache-2.0 | [源码](https://crates.io/crates/tao/0.37.1) · [许可文件](vendor/licenses/rust/tao-0.37.1) |
| tauri | 2.12.4 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri/2.12.4) · [许可文件](vendor/licenses/rust/tauri-2.12.4) |
| tauri-build | 2.7.3 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri-build/2.7.3) · [许可文件](vendor/licenses/rust/tauri-build-2.7.3) |
| tauri-codegen | 2.7.3 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri-codegen/2.7.3) · [许可文件](vendor/licenses/rust/tauri-codegen-2.7.3) |
| tauri-macros | 2.7.3 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri-macros/2.7.3) · [许可文件](vendor/licenses/rust/tauri-macros-2.7.3) |
| tauri-runtime | 2.12.2 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri-runtime/2.12.2) · [许可文件](vendor/licenses/rust/tauri-runtime-2.12.2) |
| tauri-runtime-wry | 2.12.2 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri-runtime-wry/2.12.2) · [许可文件](vendor/licenses/rust/tauri-runtime-wry-2.12.2) |
| tauri-utils | 2.10.2 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/tauri-utils/2.10.2) · [许可文件](vendor/licenses/rust/tauri-utils-2.10.2) |
| tauri-winres | 0.3.7 | MIT | [源码](https://crates.io/crates/tauri-winres/0.3.7) · [许可文件](vendor/licenses/rust/tauri-winres-0.3.7) |
| tendril | 0.5.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/tendril/0.5.1) · [许可文件](vendor/licenses/rust/tendril-0.5.1) |
| thiserror | 2.0.21 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/thiserror/2.0.21) · [许可文件](vendor/licenses/rust/thiserror-2.0.21) |
| thiserror-impl | 2.0.21 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/thiserror-impl/2.0.21) · [许可文件](vendor/licenses/rust/thiserror-impl-2.0.21) |
| time | 0.3.55 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/time/0.3.55) · [许可文件](vendor/licenses/rust/time-0.3.55) |
| time-core | 0.1.9 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/time-core/0.1.9) · [许可文件](vendor/licenses/rust/time-core-0.1.9) |
| time-macros | 0.2.32 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/time-macros/0.2.32) · [许可文件](vendor/licenses/rust/time-macros-0.2.32) |
| tinystr | 0.8.4 | Unicode-3.0 | [源码](https://crates.io/crates/tinystr/0.8.4) · [许可文件](vendor/licenses/rust/tinystr-0.8.4) |
| tokio | 1.54.0 | MIT | [源码](https://crates.io/crates/tokio/1.54.0) · [许可文件](vendor/licenses/rust/tokio-1.54.0) |
| toml | 1.1.8+spec-1.1.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/toml/1.1.8+spec-1.1.0) · [许可文件](vendor/licenses/rust/toml-1.1.8+spec-1.1.0) |
| toml_datetime | 1.1.2+spec-1.1.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/toml_datetime/1.1.2+spec-1.1.0) · [许可文件](vendor/licenses/rust/toml_datetime-1.1.2+spec-1.1.0) |
| toml_parser | 1.1.5+spec-1.1.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/toml_parser/1.1.5+spec-1.1.0) · [许可文件](vendor/licenses/rust/toml_parser-1.1.5+spec-1.1.0) |
| toml_writer | 1.1.3+spec-1.1.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/toml_writer/1.1.3+spec-1.1.0) · [许可文件](vendor/licenses/rust/toml_writer-1.1.3+spec-1.1.0) |
| tracing | 0.1.44 | MIT | [源码](https://crates.io/crates/tracing/0.1.44) · [许可文件](vendor/licenses/rust/tracing-0.1.44) |
| tracing-core | 0.1.36 | MIT | [源码](https://crates.io/crates/tracing-core/0.1.36) · [许可文件](vendor/licenses/rust/tracing-core-0.1.36) |
| typeid | 1.0.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/typeid/1.0.3) · [许可文件](vendor/licenses/rust/typeid-1.0.3) |
| typenum | 1.20.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/typenum/1.20.1) · [许可文件](vendor/licenses/rust/typenum-1.20.1) |
| unicode-ident | 1.0.27 | (MIT OR Apache-2.0) AND Unicode-3.0 | [源码](https://crates.io/crates/unicode-ident/1.0.27) · [许可文件](vendor/licenses/rust/unicode-ident-1.0.27) |
| unicode-segmentation | 1.13.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/unicode-segmentation/1.13.3) · [许可文件](vendor/licenses/rust/unicode-segmentation-1.13.3) |
| url | 2.5.8 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/url/2.5.8) · [许可文件](vendor/licenses/rust/url-2.5.8) |
| urlpattern | 0.6.0 | MIT | [源码](https://crates.io/crates/urlpattern/0.6.0) · [许可文件](vendor/licenses/rust/urlpattern-0.6.0) |
| utf8_iter | 1.0.4 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/utf8_iter/1.0.4) · [许可文件](vendor/licenses/rust/utf8_iter-1.0.4) |
| uuid | 1.28.0 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/uuid/1.28.0) · [许可文件](vendor/licenses/rust/uuid-1.28.0) |
| version_check | 0.9.5 | MIT/Apache-2.0 | [源码](https://crates.io/crates/version_check/0.9.5) · [许可文件](vendor/licenses/rust/version_check-0.9.5) |
| vswhom | 0.1.0 | MIT | [源码](https://crates.io/crates/vswhom/0.1.0) · [许可文件](vendor/licenses/rust/vswhom-0.1.0) |
| vswhom-sys | 0.1.3 | MIT | [源码](https://crates.io/crates/vswhom-sys/0.1.3) · [许可文件](vendor/licenses/rust/vswhom-sys-0.1.3) |
| walkdir | 2.5.0 | Unlicense/MIT | [源码](https://crates.io/crates/walkdir/2.5.0) · [许可文件](vendor/licenses/rust/walkdir-2.5.0) |
| web_atoms | 0.2.6 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/web_atoms/0.2.6) · [许可文件](vendor/licenses/rust/web_atoms-0.2.6) |
| web-time | 1.1.0 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/web-time/1.1.0) · [许可文件](vendor/licenses/rust/web-time-1.1.0) |
| webview2-com | 0.39.1 | MIT | [源码](https://crates.io/crates/webview2-com/0.39.1) · [许可文件](vendor/licenses/rust/webview2-com-0.39.1) |
| webview2-com-macros | 0.8.1 | MIT | [源码](https://crates.io/crates/webview2-com-macros/0.8.1) · [许可文件](vendor/licenses/rust/webview2-com-macros-0.8.1) |
| webview2-com-sys | 0.39.1 | MIT | [源码](https://crates.io/crates/webview2-com-sys/0.39.1) · [许可文件](vendor/licenses/rust/webview2-com-sys-0.39.1) |
| winapi-util | 0.1.11 | Unlicense OR MIT | [源码](https://crates.io/crates/winapi-util/0.1.11) · [许可文件](vendor/licenses/rust/winapi-util-0.1.11) |
| window-vibrancy | 0.8.1 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/window-vibrancy/0.8.1) · [许可文件](vendor/licenses/rust/window-vibrancy-0.8.1) |
| windows | 0.62.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows/0.62.2) · [许可文件](vendor/licenses/rust/windows-0.62.2) |
| windows-collections | 0.3.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-collections/0.3.2) · [许可文件](vendor/licenses/rust/windows-collections-0.3.2) |
| windows-core | 0.62.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-core/0.62.2) · [许可文件](vendor/licenses/rust/windows-core-0.62.2) |
| windows-future | 0.3.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-future/0.3.2) · [许可文件](vendor/licenses/rust/windows-future-0.3.2) |
| windows-implement | 0.60.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-implement/0.60.2) · [许可文件](vendor/licenses/rust/windows-implement-0.60.2) |
| windows-interface | 0.59.3 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-interface/0.59.3) · [许可文件](vendor/licenses/rust/windows-interface-0.59.3) |
| windows-link | 0.2.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-link/0.2.1) · [许可文件](vendor/licenses/rust/windows-link-0.2.1) |
| windows-numerics | 0.3.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-numerics/0.3.1) · [许可文件](vendor/licenses/rust/windows-numerics-0.3.1) |
| windows-result | 0.4.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-result/0.4.1) · [许可文件](vendor/licenses/rust/windows-result-0.4.1) |
| windows-strings | 0.5.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-strings/0.5.1) · [许可文件](vendor/licenses/rust/windows-strings-0.5.1) |
| windows-sys | 0.61.2 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-sys/0.61.2) · [许可文件](vendor/licenses/rust/windows-sys-0.61.2) |
| windows-threading | 0.2.1 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-threading/0.2.1) · [许可文件](vendor/licenses/rust/windows-threading-0.2.1) |
| windows-version | 0.1.7 | MIT OR Apache-2.0 | [源码](https://crates.io/crates/windows-version/0.1.7) · [许可文件](vendor/licenses/rust/windows-version-0.1.7) |
| winnow | 1.0.4 | MIT | [源码](https://crates.io/crates/winnow/1.0.4) · [许可文件](vendor/licenses/rust/winnow-1.0.4) |
| winreg | 0.56.0 | MIT | [源码](https://crates.io/crates/winreg/0.56.0) · [许可文件](vendor/licenses/rust/winreg-0.56.0) |
| writeable | 0.6.4 | Unicode-3.0 | [源码](https://crates.io/crates/writeable/0.6.4) · [许可文件](vendor/licenses/rust/writeable-0.6.4) |
| wry | 0.57.0 | Apache-2.0 OR MIT | [源码](https://crates.io/crates/wry/0.57.0) · [许可文件](vendor/licenses/rust/wry-0.57.0) |
| yoke | 0.8.3 | Unicode-3.0 | [源码](https://crates.io/crates/yoke/0.8.3) · [许可文件](vendor/licenses/rust/yoke-0.8.3) |
| yoke-derive | 0.8.4 | Unicode-3.0 | [源码](https://crates.io/crates/yoke-derive/0.8.4) · [许可文件](vendor/licenses/rust/yoke-derive-0.8.4) |
| zerofrom | 0.1.8 | Unicode-3.0 | [源码](https://crates.io/crates/zerofrom/0.1.8) · [许可文件](vendor/licenses/rust/zerofrom-0.1.8) |
| zerofrom-derive | 0.1.8 | Unicode-3.0 | [源码](https://crates.io/crates/zerofrom-derive/0.1.8) · [许可文件](vendor/licenses/rust/zerofrom-derive-0.1.8) |
| zerotrie | 0.2.5 | Unicode-3.0 | [源码](https://crates.io/crates/zerotrie/0.2.5) · [许可文件](vendor/licenses/rust/zerotrie-0.2.5) |
| zerovec | 0.11.8 | Unicode-3.0 | [源码](https://crates.io/crates/zerovec/0.11.8) · [许可文件](vendor/licenses/rust/zerovec-0.11.8) |
| zerovec-derive | 0.11.6 | Unicode-3.0 | [源码](https://crates.io/crates/zerovec-derive/0.11.6) · [许可文件](vendor/licenses/rust/zerovec-derive-0.11.6) |
| zmij | 1.0.23 | MIT | [源码](https://crates.io/crates/zmij/1.0.23) · [许可文件](vendor/licenses/rust/zmij-1.0.23) |

## Rust 标准库

标准库版权与许可清单保留在 [vendor/licenses/rust-standard-library/COPYRIGHT-library.html](vendor/licenses/rust-standard-library/COPYRIGHT-library.html)，其引用的许可文本位于同目录 licenses 子目录。该清单沿用 Rust 工具链提供的原文。

本文件只整理来源与随包提供的声明；软件按各自许可的条款提供。更新依赖后应重新生成本文件和随包声明。
