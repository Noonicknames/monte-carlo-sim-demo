/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */

export type ReadableStreamType = "bytes";

export class IntoUnderlyingByteSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableByteStreamController): Promise<any>;
    start(controller: ReadableByteStreamController): void;
    readonly autoAllocateChunkSize: number;
    readonly type: ReadableStreamType;
}

export class IntoUnderlyingSink {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    abort(reason: any): Promise<any>;
    close(): Promise<any>;
    write(chunk: any): Promise<any>;
}

export class IntoUnderlyingSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableStreamDefaultController): Promise<any>;
}

export function run(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly run: () => void;
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
    readonly intounderlyingbytesource_cancel: (a: number) => void;
    readonly intounderlyingbytesource_pull: (a: number, b: any) => any;
    readonly intounderlyingbytesource_start: (a: number, b: any) => void;
    readonly intounderlyingbytesource_type: (a: number) => number;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly intounderlyingsink_abort: (a: number, b: any) => any;
    readonly intounderlyingsink_close: (a: number) => any;
    readonly intounderlyingsink_write: (a: number, b: any) => any;
    readonly intounderlyingsource_cancel: (a: number) => void;
    readonly intounderlyingsource_pull: (a: number, b: any) => any;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Array__web_sys_1c6d48d9a03e7c7d___features__gen_ResizeObserver__ResizeObserver______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__11: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__12: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
