export class IntoUnderlyingByteSource {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IntoUnderlyingByteSourceFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_intounderlyingbytesource_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get autoAllocateChunkSize() {
        const ret = wasm.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);
        return ret >>> 0;
    }
    cancel() {
        const ptr = this.__destroy_into_raw();
        wasm.intounderlyingbytesource_cancel(ptr);
    }
    /**
     * @param {ReadableByteStreamController} controller
     * @returns {Promise<any>}
     */
    pull(controller) {
        const ret = wasm.intounderlyingbytesource_pull(this.__wbg_ptr, controller);
        return ret;
    }
    /**
     * @param {ReadableByteStreamController} controller
     */
    start(controller) {
        wasm.intounderlyingbytesource_start(this.__wbg_ptr, controller);
    }
    /**
     * @returns {ReadableStreamType}
     */
    get type() {
        const ret = wasm.intounderlyingbytesource_type(this.__wbg_ptr);
        return __wbindgen_enum_ReadableStreamType[ret];
    }
}
if (Symbol.dispose) IntoUnderlyingByteSource.prototype[Symbol.dispose] = IntoUnderlyingByteSource.prototype.free;

export class IntoUnderlyingSink {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IntoUnderlyingSinkFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_intounderlyingsink_free(ptr, 0);
    }
    /**
     * @param {any} reason
     * @returns {Promise<any>}
     */
    abort(reason) {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.intounderlyingsink_abort(ptr, reason);
        return ret;
    }
    /**
     * @returns {Promise<any>}
     */
    close() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.intounderlyingsink_close(ptr);
        return ret;
    }
    /**
     * @param {any} chunk
     * @returns {Promise<any>}
     */
    write(chunk) {
        const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, chunk);
        return ret;
    }
}
if (Symbol.dispose) IntoUnderlyingSink.prototype[Symbol.dispose] = IntoUnderlyingSink.prototype.free;

export class IntoUnderlyingSource {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        IntoUnderlyingSourceFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_intounderlyingsource_free(ptr, 0);
    }
    cancel() {
        const ptr = this.__destroy_into_raw();
        wasm.intounderlyingsource_cancel(ptr);
    }
    /**
     * @param {ReadableStreamDefaultController} controller
     * @returns {Promise<any>}
     */
    pull(controller) {
        const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, controller);
        return ret;
    }
}
if (Symbol.dispose) IntoUnderlyingSource.prototype[Symbol.dispose] = IntoUnderlyingSource.prototype.free;

export function run() {
    wasm.run();
}
export function __wbg_Window_a2a6c4d665047b14(arg0) {
    const ret = arg0.Window;
    return ret;
}
export function __wbg_Window_c7f91e3f80ae0a0e(arg0) {
    const ret = arg0.Window;
    return ret;
}
export function __wbg_WorkerGlobalScope_2664448a7c667d67(arg0) {
    const ret = arg0.WorkerGlobalScope;
    return ret;
}
export function __wbg___wbindgen_debug_string_a57024b9c6e4a48b(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_is_function_5e4570eb24ffa122(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
}
export function __wbg___wbindgen_is_null_7d13f41e1a2d5140(arg0) {
    const ret = arg0 === null;
    return ret;
}
export function __wbg___wbindgen_is_string_e6f02f0ea5f20a32(arg0) {
    const ret = typeof(arg0) === 'string';
    return ret;
}
export function __wbg___wbindgen_is_undefined_6cff064c44e0d823(arg0) {
    const ret = arg0 === undefined;
    return ret;
}
export function __wbg___wbindgen_string_get_d154f1e671052120(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg___wbindgen_throw_bb96b2010945f0bc(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
export function __wbg__wbg_cb_unref_be22cc64ae6946a0(arg0) {
    arg0._wbg_cb_unref();
}
export function __wbg_abort_1254fe4ac5695dc0(arg0, arg1) {
    arg0.abort(arg1);
}
export function __wbg_abort_d8615b5857e112b3(arg0) {
    arg0.abort();
}
export function __wbg_activeElement_d26d0a6ad4770cf7(arg0) {
    const ret = arg0.activeElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_addEventListener_3b8edc02c33d9f77() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments); }
export function __wbg_addListener_c04527216509fad5() { return handleError(function (arg0, arg1) {
    arg0.addListener(arg1);
}, arguments); }
export function __wbg_altKey_753fdbc251308d47(arg0) {
    const ret = arg0.altKey;
    return ret;
}
export function __wbg_altKey_755975127b4ad2c8(arg0) {
    const ret = arg0.altKey;
    return ret;
}
export function __wbg_animate_8f41e2f47c7d04ab(arg0, arg1, arg2) {
    const ret = arg0.animate(arg1, arg2);
    return ret;
}
export function __wbg_appendChild_d5cbce3d5fa81471() { return handleError(function (arg0, arg1) {
    const ret = arg0.appendChild(arg1);
    return ret;
}, arguments); }
export function __wbg_append_acad6a3f39a3e778() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_arrayBuffer_16433f17fbd74397() { return handleError(function (arg0) {
    const ret = arg0.arrayBuffer();
    return ret;
}, arguments); }
export function __wbg_beginRenderPass_3c53642423af50dc() { return handleError(function (arg0, arg1) {
    const ret = arg0.beginRenderPass(arg1);
    return ret;
}, arguments); }
export function __wbg_blockSize_7fad8bcc48860290(arg0) {
    const ret = arg0.blockSize;
    return ret;
}
export function __wbg_body_d6eca0586d628e3c(arg0) {
    const ret = arg0.body;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_brand_3bc196a43eceb8af(arg0, arg1) {
    const ret = arg1.brand;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_brands_b7dcf262485c3e7c(arg0) {
    const ret = arg0.brands;
    return ret;
}
export function __wbg_buffer_78291c0e094ccf99(arg0) {
    const ret = arg0.buffer;
    return ret;
}
export function __wbg_button_3963e81aec2b2f60(arg0) {
    const ret = arg0.button;
    return ret;
}
export function __wbg_buttons_688a15d7be68a0b2(arg0) {
    const ret = arg0.buttons;
    return ret;
}
export function __wbg_byobRequest_f8b1c89429b77545(arg0) {
    const ret = arg0.byobRequest;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_byteLength_336bc7d303511ba0(arg0) {
    const ret = arg0.byteLength;
    return ret;
}
export function __wbg_byteOffset_2b1d5b10453ce198(arg0) {
    const ret = arg0.byteOffset;
    return ret;
}
export function __wbg_call_35dba3c747ad7521() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.call(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_cancelAnimationFrame_58acec8573d45a99() { return handleError(function (arg0, arg1) {
    arg0.cancelAnimationFrame(arg1);
}, arguments); }
export function __wbg_cancelIdleCallback_084112750218613b(arg0, arg1) {
    arg0.cancelIdleCallback(arg1 >>> 0);
}
export function __wbg_cancel_65f38182e2eeac5c(arg0) {
    arg0.cancel();
}
export function __wbg_catch_8094577c3f159ad5(arg0, arg1) {
    const ret = arg0.catch(arg1);
    return ret;
}
export function __wbg_clearTimeout_333bba87532ab9d3(arg0) {
    const ret = clearTimeout(arg0);
    return ret;
}
export function __wbg_clearTimeout_4e61cface6c91ad9(arg0, arg1) {
    arg0.clearTimeout(arg1);
}
export function __wbg_close_716bcb607efb6fae(arg0) {
    arg0.close();
}
export function __wbg_close_72f69f5f2de2bc73() { return handleError(function (arg0) {
    arg0.close();
}, arguments); }
export function __wbg_close_97cdb44c3a7878f6() { return handleError(function (arg0) {
    arg0.close();
}, arguments); }
export function __wbg_code_1bac1fd03147d97e(arg0, arg1) {
    const ret = arg1.code;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_configure_1e2c1c9edad07d26() { return handleError(function (arg0, arg1) {
    arg0.configure(arg1);
}, arguments); }
export function __wbg_contains_3ba0161eb6906b95(arg0, arg1) {
    const ret = arg0.contains(arg1);
    return ret;
}
export function __wbg_contentRect_6779e57cdd2e9e83(arg0) {
    const ret = arg0.contentRect;
    return ret;
}
export function __wbg_copyBufferToBuffer_01766818654a9868() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4);
}, arguments); }
export function __wbg_copyBufferToBuffer_9c174b96fb08d551() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4, arg5);
}, arguments); }
export function __wbg_createBindGroupLayout_b1bd63b4e88459d8() { return handleError(function (arg0, arg1) {
    const ret = arg0.createBindGroupLayout(arg1);
    return ret;
}, arguments); }
export function __wbg_createBindGroup_f539b26ca341308f(arg0, arg1) {
    const ret = arg0.createBindGroup(arg1);
    return ret;
}
export function __wbg_createBuffer_d800e9b1d41b2ee5() { return handleError(function (arg0, arg1) {
    const ret = arg0.createBuffer(arg1);
    return ret;
}, arguments); }
export function __wbg_createCommandEncoder_3352d1ffc36c6fc0(arg0, arg1) {
    const ret = arg0.createCommandEncoder(arg1);
    return ret;
}
export function __wbg_createElement_7f42344eee7bb810() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
    return ret;
}, arguments); }
export function __wbg_createObjectURL_da379bd6bf9a91c6() { return handleError(function (arg0, arg1) {
    const ret = URL.createObjectURL(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_createPipelineLayout_6eab52c327118937(arg0, arg1) {
    const ret = arg0.createPipelineLayout(arg1);
    return ret;
}
export function __wbg_createRenderPipeline_0ebb7ebc653e9207() { return handleError(function (arg0, arg1) {
    const ret = arg0.createRenderPipeline(arg1);
    return ret;
}, arguments); }
export function __wbg_createSampler_9bd91d7e928c0060(arg0, arg1) {
    const ret = arg0.createSampler(arg1);
    return ret;
}
export function __wbg_createShaderModule_cefa51336cb288ae(arg0, arg1) {
    const ret = arg0.createShaderModule(arg1);
    return ret;
}
export function __wbg_createTexture_ed7e9fc04dd54d84() { return handleError(function (arg0, arg1) {
    const ret = arg0.createTexture(arg1);
    return ret;
}, arguments); }
export function __wbg_createView_da41c2d2cb212715() { return handleError(function (arg0, arg1) {
    const ret = arg0.createView(arg1);
    return ret;
}, arguments); }
export function __wbg_ctrlKey_8f6cb44d63052c81(arg0) {
    const ret = arg0.ctrlKey;
    return ret;
}
export function __wbg_ctrlKey_9490b716a4845258(arg0) {
    const ret = arg0.ctrlKey;
    return ret;
}
export function __wbg_debug_3853dbaf0bca30f9(arg0) {
    console.debug(arg0);
}
export function __wbg_deltaMode_1eedd4132dd540ba(arg0) {
    const ret = arg0.deltaMode;
    return ret;
}
export function __wbg_deltaX_9df7ccb6bdd1b836(arg0) {
    const ret = arg0.deltaX;
    return ret;
}
export function __wbg_deltaY_13780a1f1e6d6f8c(arg0) {
    const ret = arg0.deltaY;
    return ret;
}
export function __wbg_devicePixelContentBoxSize_95d643903e292efa(arg0) {
    const ret = arg0.devicePixelContentBoxSize;
    return ret;
}
export function __wbg_devicePixelRatio_e60a2d12bfd01f78(arg0) {
    const ret = arg0.devicePixelRatio;
    return ret;
}
export function __wbg_disconnect_0f608ec00c13c91e(arg0) {
    arg0.disconnect();
}
export function __wbg_disconnect_c639f34b341ef8e8(arg0) {
    arg0.disconnect();
}
export function __wbg_document_ac38448dbfd31a57(arg0) {
    const ret = arg0.document;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_done_669171204c3dcae2(arg0) {
    const ret = arg0.done;
    return ret;
}
export function __wbg_draw_086a9578fc9898c2(arg0, arg1, arg2, arg3, arg4) {
    arg0.draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}
export function __wbg_end_b57473834b877409(arg0) {
    arg0.end();
}
export function __wbg_enqueue_7d68a21eda78e72f() { return handleError(function (arg0, arg1) {
    arg0.enqueue(arg1);
}, arguments); }
export function __wbg_entries_2c710161cbd65b89(arg0) {
    const ret = arg0.entries();
    return ret;
}
export function __wbg_error_757e9472f8410341(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
    }
}
export function __wbg_error_afb37ce311f1115d(arg0, arg1) {
    console.error(arg0, arg1);
}
export function __wbg_error_dd408a7b3cb542dd(arg0) {
    console.error(arg0);
}
export function __wbg_features_dec7bd2fd3d91bd6(arg0) {
    const ret = arg0.features;
    return ret;
}
export function __wbg_fetch_074561c3e313c86f(arg0) {
    const ret = fetch(arg0);
    return ret;
}
export function __wbg_fetch_d752d93f5b259503(arg0, arg1) {
    const ret = arg0.fetch(arg1);
    return ret;
}
export function __wbg_finish_09ec094c10f41e7b(arg0) {
    const ret = arg0.finish();
    return ret;
}
export function __wbg_finish_ec1c191f66a895b1(arg0, arg1) {
    const ret = arg0.finish(arg1);
    return ret;
}
export function __wbg_focus_77d7483c7b2b9f30() { return handleError(function (arg0) {
    arg0.focus();
}, arguments); }
export function __wbg_fullscreenElement_f225b88d410fadc1(arg0) {
    const ret = arg0.fullscreenElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_getCoalescedEvents_3e003f63d9ebbc05(arg0) {
    const ret = arg0.getCoalescedEvents;
    return ret;
}
export function __wbg_getCoalescedEvents_50e865d4dd0ed4b0(arg0) {
    const ret = arg0.getCoalescedEvents();
    return ret;
}
export function __wbg_getComputedStyle_d0f299f3151ac25e() { return handleError(function (arg0, arg1) {
    const ret = arg0.getComputedStyle(arg1);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getContext_71c33f14b63da593() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getContext_c5236e0057b35024() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_getCurrentTexture_9f3b84d0eaa6cd95() { return handleError(function (arg0) {
    const ret = arg0.getCurrentTexture();
    return ret;
}, arguments); }
export function __wbg_getElementById_1637d6969b003cda(arg0, arg1, arg2) {
    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_getMappedRange_fb54c6327b2d8d20() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.getMappedRange(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_getOwnPropertyDescriptor_e43dd1d4f19c6423(arg0, arg1) {
    const ret = Object.getOwnPropertyDescriptor(arg0, arg1);
    return ret;
}
export function __wbg_getPreferredCanvasFormat_0ef5034c8902201b(arg0) {
    const ret = arg0.getPreferredCanvasFormat();
    return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 102) - 1;
}
export function __wbg_getPropertyValue_50144438fb4fc8f4() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_get_36debceb6d43d7a1(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_get_c0c8f8d7da0c03dd(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_get_unchecked_e20b893aeafc3fca(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
export function __wbg_gpu_afdd4387c7afe5f9(arg0) {
    const ret = arg0.gpu;
    return ret;
}
export function __wbg_has_b3a6e6d0d28295fa() { return handleError(function (arg0, arg1) {
    const ret = Reflect.has(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_has_eafa12e457ea88fb(arg0, arg1, arg2) {
    const ret = arg0.has(getStringFromWasm0(arg1, arg2));
    return ret;
}
export function __wbg_headers_92567b07014384b9(arg0) {
    const ret = arg0.headers;
    return ret;
}
export function __wbg_height_c25c887c11a170f2(arg0) {
    const ret = arg0.height;
    return ret;
}
export function __wbg_href_ab966bccc773240e() { return handleError(function (arg0, arg1) {
    const ret = arg1.href;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_info_726982aff9befe16(arg0) {
    console.info(arg0);
}
export function __wbg_inlineSize_cbd06e91714e38d0(arg0) {
    const ret = arg0.inlineSize;
    return ret;
}
export function __wbg_instanceof_Response_8f49efbd4bfd76d6(arg0) {
    let result;
    try {
        result = arg0 instanceof Response;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_instanceof_Window_5625ff9937037a38(arg0) {
    let result;
    try {
        result = arg0 instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
export function __wbg_isArray_6339f732981044bf(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
}
export function __wbg_isIntersecting_cd67c3e29798c6a7(arg0) {
    const ret = arg0.isIntersecting;
    return ret;
}
export function __wbg_is_86be747e88e872fb(arg0, arg1) {
    const ret = Object.is(arg0, arg1);
    return ret;
}
export function __wbg_key_d1b2fd5ee42567c0(arg0, arg1) {
    const ret = arg1.key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_label_7add8cb37a6ef98f(arg0, arg1) {
    const ret = arg1.label;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_length_36bd29c6848c2144(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_length_ecfa2c63d3d0d82c(arg0) {
    const ret = arg0.length;
    return ret;
}
export function __wbg_limits_601ad2e086ef8141(arg0) {
    const ret = arg0.limits;
    return ret;
}
export function __wbg_location_00f2951912aef6cc(arg0) {
    const ret = arg0.location;
    return ret;
}
export function __wbg_location_5d269cf0aa99107a(arg0) {
    const ret = arg0.location;
    return ret;
}
export function __wbg_log_e6372b4fbfc9f81e(arg0) {
    console.log(arg0);
}
export function __wbg_mapAsync_b0597127f5037286(arg0, arg1, arg2, arg3) {
    const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
    return ret;
}
export function __wbg_matchMedia_0e2963d34f3ddd40() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments); }
export function __wbg_matches_72427e51457a4411(arg0) {
    const ret = arg0.matches;
    return ret;
}
export function __wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d(arg0) {
    const ret = arg0.maxBindGroupsPlusVertexBuffers;
    return ret;
}
export function __wbg_maxBindGroups_4e424afe6ce86ca2(arg0) {
    const ret = arg0.maxBindGroups;
    return ret;
}
export function __wbg_maxBindingsPerBindGroup_7d035da36821c44f(arg0) {
    const ret = arg0.maxBindingsPerBindGroup;
    return ret;
}
export function __wbg_maxBufferSize_423f4a084e32a195(arg0) {
    const ret = arg0.maxBufferSize;
    return ret;
}
export function __wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6(arg0) {
    const ret = arg0.maxColorAttachmentBytesPerSample;
    return ret;
}
export function __wbg_maxColorAttachments_d924670762b9e250(arg0) {
    const ret = arg0.maxColorAttachments;
    return ret;
}
export function __wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59(arg0) {
    const ret = arg0.maxComputeInvocationsPerWorkgroup;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e(arg0) {
    const ret = arg0.maxComputeWorkgroupSizeX;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeY_85123ea0587f7558(arg0) {
    const ret = arg0.maxComputeWorkgroupSizeY;
    return ret;
}
export function __wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f(arg0) {
    const ret = arg0.maxComputeWorkgroupSizeZ;
    return ret;
}
export function __wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204(arg0) {
    const ret = arg0.maxComputeWorkgroupStorageSize;
    return ret;
}
export function __wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4(arg0) {
    const ret = arg0.maxComputeWorkgroupsPerDimension;
    return ret;
}
export function __wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c(arg0) {
    const ret = arg0.maxDynamicStorageBuffersPerPipelineLayout;
    return ret;
}
export function __wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6(arg0) {
    const ret = arg0.maxDynamicUniformBuffersPerPipelineLayout;
    return ret;
}
export function __wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a(arg0) {
    const ret = arg0.maxInterStageShaderVariables;
    return ret;
}
export function __wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a(arg0) {
    const ret = arg0.maxSampledTexturesPerShaderStage;
    return ret;
}
export function __wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f(arg0) {
    const ret = arg0.maxSamplersPerShaderStage;
    return ret;
}
export function __wbg_maxStorageBufferBindingSize_2e244bded070b18d(arg0) {
    const ret = arg0.maxStorageBufferBindingSize;
    return ret;
}
export function __wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d(arg0) {
    const ret = arg0.maxStorageBuffersPerShaderStage;
    return ret;
}
export function __wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b(arg0) {
    const ret = arg0.maxStorageTexturesPerShaderStage;
    return ret;
}
export function __wbg_maxTextureArrayLayers_0e699147ad00502d(arg0) {
    const ret = arg0.maxTextureArrayLayers;
    return ret;
}
export function __wbg_maxTextureDimension1D_aabf6add54decfe2(arg0) {
    const ret = arg0.maxTextureDimension1D;
    return ret;
}
export function __wbg_maxTextureDimension2D_dd598b27e9c0c1c4(arg0) {
    const ret = arg0.maxTextureDimension2D;
    return ret;
}
export function __wbg_maxTextureDimension3D_f944266c65dfd1a9(arg0) {
    const ret = arg0.maxTextureDimension3D;
    return ret;
}
export function __wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53(arg0) {
    const ret = arg0.maxUniformBufferBindingSize;
    return ret;
}
export function __wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f(arg0) {
    const ret = arg0.maxUniformBuffersPerShaderStage;
    return ret;
}
export function __wbg_maxVertexAttributes_5cf6392c4e9033fe(arg0) {
    const ret = arg0.maxVertexAttributes;
    return ret;
}
export function __wbg_maxVertexBufferArrayStride_548baa887375d865(arg0) {
    const ret = arg0.maxVertexBufferArrayStride;
    return ret;
}
export function __wbg_maxVertexBuffers_75d881156591f5da(arg0) {
    const ret = arg0.maxVertexBuffers;
    return ret;
}
export function __wbg_media_c1fa9be4f8eb49dc(arg0, arg1) {
    const ret = arg1.media;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_metaKey_917f037461143e51(arg0) {
    const ret = arg0.metaKey;
    return ret;
}
export function __wbg_metaKey_f282cd52fbd7cb27(arg0) {
    const ret = arg0.metaKey;
    return ret;
}
export function __wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3(arg0) {
    const ret = arg0.minStorageBufferOffsetAlignment;
    return ret;
}
export function __wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd(arg0) {
    const ret = arg0.minUniformBufferOffsetAlignment;
    return ret;
}
export function __wbg_movementX_dc66b81da8d5fd63(arg0) {
    const ret = arg0.movementX;
    return ret;
}
export function __wbg_movementY_3c9e1b4c5853d2c5(arg0) {
    const ret = arg0.movementY;
    return ret;
}
export function __wbg_navigator_6cfdd5fa246d910f(arg0) {
    const ret = arg0.navigator;
    return ret;
}
export function __wbg_navigator_e5c345298a9609cd(arg0) {
    const ret = arg0.navigator;
    return ret;
}
export function __wbg_new_227d7c05414eb861() {
    const ret = new Error();
    return ret;
}
export function __wbg_new_358857d90afd5a2d(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return ret;
}
export function __wbg_new_4c27d8e40bf066b2() { return handleError(function (arg0) {
    const ret = new ResizeObserver(arg0);
    return ret;
}, arguments); }
export function __wbg_new_652118cdee90118f() { return handleError(function (arg0, arg1) {
    const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
    return ret;
}, arguments); }
export function __wbg_new_73118f90fa6698ff() { return handleError(function () {
    const ret = new MessageChannel();
    return ret;
}, arguments); }
export function __wbg_new_77cc4f4f472aeb81(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
}
export function __wbg_new_84a929404f177239() { return handleError(function (arg0, arg1) {
    const ret = new Worker(getStringFromWasm0(arg0, arg1));
    return ret;
}, arguments); }
export function __wbg_new_95039e162b0c4466() { return handleError(function () {
    const ret = new Headers();
    return ret;
}, arguments); }
export function __wbg_new_e76bf2683c736e8e() { return handleError(function (arg0) {
    const ret = new IntersectionObserver(arg0);
    return ret;
}, arguments); }
export function __wbg_new_ebe3e0f6837f0879() {
    const ret = new Object();
    return ret;
}
export function __wbg_new_f5712de39c931ddf() { return handleError(function () {
    const ret = new AbortController();
    return ret;
}, arguments); }
export function __wbg_new_from_slice_3eea173078478cfe(arg0, arg1) {
    const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
    return ret;
}
export function __wbg_new_typed_ad9b105a7be50737() {
    const ret = new Object();
    return ret;
}
export function __wbg_new_typed_cceaf62d8d95e9f2(arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined_______true_(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        const ret = new Promise(cb0);
        return ret;
    } finally {
        state0.a = 0;
    }
}
export function __wbg_new_with_byte_offset_and_length_ff6e927f8d72f0c3(arg0, arg1, arg2) {
    const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
    return ret;
}
export function __wbg_new_with_str_and_init_5a37d576dec75a86() { return handleError(function (arg0, arg1, arg2) {
    const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
    return ret;
}, arguments); }
export function __wbg_new_with_str_sequence_and_options_fd8c769ac4dc6f02() { return handleError(function (arg0, arg1) {
    const ret = new Blob(arg0, arg1);
    return ret;
}, arguments); }
export function __wbg_next_42cf16ee0dafc9e2() { return handleError(function (arg0) {
    const ret = arg0.next();
    return ret;
}, arguments); }
export function __wbg_now_e7c6795a7f81e10f(arg0) {
    const ret = arg0.now();
    return ret;
}
export function __wbg_observe_2c9948097e57bf5d(arg0, arg1, arg2) {
    arg0.observe(arg1, arg2);
}
export function __wbg_observe_77ac29d55bfbcc1c(arg0, arg1) {
    arg0.observe(arg1);
}
export function __wbg_observe_e15abac5309babc4(arg0, arg1) {
    arg0.observe(arg1);
}
export function __wbg_of_0c6464fa8d2aa86d(arg0) {
    const ret = Array.of(arg0);
    return ret;
}
export function __wbg_of_598c0ff0cd48a890(arg0, arg1) {
    const ret = Array.of(arg0, arg1);
    return ret;
}
export function __wbg_offsetX_a9bf2ea7f0575ac9(arg0) {
    const ret = arg0.offsetX;
    return ret;
}
export function __wbg_offsetY_10e5433a1bbd4c01(arg0) {
    const ret = arg0.offsetY;
    return ret;
}
export function __wbg_onSubmittedWorkDone_1190213cee1ecf7e(arg0) {
    const ret = arg0.onSubmittedWorkDone();
    return ret;
}
export function __wbg_performance_3fcf6e32a7e1ed0a(arg0) {
    const ret = arg0.performance;
    return ret;
}
export function __wbg_persisted_03e56c5f9080ac54(arg0) {
    const ret = arg0.persisted;
    return ret;
}
export function __wbg_play_3997a1be51d27925(arg0) {
    arg0.play();
}
export function __wbg_pointerId_c1e1cd6b32d6d017(arg0) {
    const ret = arg0.pointerId;
    return ret;
}
export function __wbg_pointerType_b3dafa8fb9c97016(arg0, arg1) {
    const ret = arg1.pointerType;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_port1_1de7d907145688e5(arg0) {
    const ret = arg0.port1;
    return ret;
}
export function __wbg_port2_afd233d5a7a6fa07(arg0) {
    const ret = arg0.port2;
    return ret;
}
export function __wbg_postMessage_9d68c41311a76e69() { return handleError(function (arg0, arg1) {
    arg0.postMessage(arg1);
}, arguments); }
export function __wbg_postMessage_db101a32b7c1dbf8() { return handleError(function (arg0, arg1, arg2) {
    arg0.postMessage(arg1, arg2);
}, arguments); }
export function __wbg_postTask_e2439afddcdfbb55(arg0, arg1, arg2) {
    const ret = arg0.postTask(arg1, arg2);
    return ret;
}
export function __wbg_pressure_7a96116e299b1c26(arg0) {
    const ret = arg0.pressure;
    return ret;
}
export function __wbg_preventDefault_19878c58b8010668(arg0) {
    arg0.preventDefault();
}
export function __wbg_prototype_0d5bb2023db3bcfc() {
    const ret = ResizeObserverEntry.prototype;
    return ret;
}
export function __wbg_prototypesetcall_de8e0d9553586985(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
}
export function __wbg_querySelectorAll_9b6a612499ecb916() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.querySelectorAll(getStringFromWasm0(arg1, arg2));
    return ret;
}, arguments); }
export function __wbg_queueMicrotask_600b0f5c826e3bc6(arg0, arg1) {
    arg0.queueMicrotask(arg1);
}
export function __wbg_queueMicrotask_ac694eae12e92dfb(arg0) {
    queueMicrotask(arg0);
}
export function __wbg_queueMicrotask_be5fe34a8f4cad4d(arg0) {
    const ret = arg0.queueMicrotask;
    return ret;
}
export function __wbg_queue_7b62c28143d44293(arg0) {
    const ret = arg0.queue;
    return ret;
}
export function __wbg_removeEventListener_aa653c6b402cc27e() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments); }
export function __wbg_removeListener_e87a5dc499a525b8() { return handleError(function (arg0, arg1) {
    arg0.removeListener(arg1);
}, arguments); }
export function __wbg_removeProperty_cdd2665e76b8f1c6() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.removeProperty(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_repeat_8afe4eb608701a7e(arg0) {
    const ret = arg0.repeat;
    return ret;
}
export function __wbg_requestAdapter_a539af006419f2e9(arg0, arg1) {
    const ret = arg0.requestAdapter(arg1);
    return ret;
}
export function __wbg_requestAnimationFrame_bcb3ce6247e27dd4() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestAnimationFrame(arg1);
    return ret;
}, arguments); }
export function __wbg_requestDevice_5cb8a582e55d08cb(arg0, arg1) {
    const ret = arg0.requestDevice(arg1);
    return ret;
}
export function __wbg_requestFullscreen_3f16e43f398ce624(arg0) {
    const ret = arg0.requestFullscreen();
    return ret;
}
export function __wbg_requestFullscreen_b977a3a0697e883c(arg0) {
    const ret = arg0.requestFullscreen;
    return ret;
}
export function __wbg_requestIdleCallback_3689e3e38f6cfc02(arg0) {
    const ret = arg0.requestIdleCallback;
    return ret;
}
export function __wbg_requestIdleCallback_95007e53e6e36e70() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestIdleCallback(arg1);
    return ret;
}, arguments); }
export function __wbg_resolve_020f95d838c6ef25(arg0) {
    const ret = Promise.resolve(arg0);
    return ret;
}
export function __wbg_respond_f88cbcebace42068() { return handleError(function (arg0, arg1) {
    arg0.respond(arg1 >>> 0);
}, arguments); }
export function __wbg_revokeObjectURL_709bc205d98c34ba() { return handleError(function (arg0, arg1) {
    URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
}, arguments); }
export function __wbg_scheduler_a17d41c9c822fc26(arg0) {
    const ret = arg0.scheduler;
    return ret;
}
export function __wbg_scheduler_b35fe73ba70e89cc(arg0) {
    const ret = arg0.scheduler;
    return ret;
}
export function __wbg_setAttribute_507f8367905a9c03() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setBindGroup_11bdbb60cc8b54b9() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
}, arguments); }
export function __wbg_setBindGroup_418c3e0eb6943ce0(arg0, arg1, arg2) {
    arg0.setBindGroup(arg1 >>> 0, arg2);
}
export function __wbg_setPipeline_b6f981027e02cd16(arg0, arg1) {
    arg0.setPipeline(arg1);
}
export function __wbg_setPointerCapture_761aa655f9aebc1a() { return handleError(function (arg0, arg1) {
    arg0.setPointerCapture(arg1);
}, arguments); }
export function __wbg_setProperty_684ce273e28a7037() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments); }
export function __wbg_setTimeout_3a808dd861dd3c12(arg0, arg1) {
    const ret = setTimeout(arg0, arg1);
    return ret;
}
export function __wbg_setTimeout_8be4960d8ad2bb76() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.setTimeout(arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_setTimeout_9d0a5393fa9dc61c() { return handleError(function (arg0, arg1) {
    const ret = arg0.setTimeout(arg1);
    return ret;
}, arguments); }
export function __wbg_setVertexBuffer_6db3b60e99280744(arg0, arg1, arg2, arg3) {
    arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3);
}
export function __wbg_setVertexBuffer_cbf4ca1627c02f4c(arg0, arg1, arg2, arg3, arg4) {
    arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3, arg4);
}
export function __wbg_set_8155bb79a948541b() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(arg0, arg1, arg2);
    return ret;
}, arguments); }
export function __wbg_set_862c439a342a8818(arg0, arg1, arg2) {
    arg0.set(arg1, arg2 >>> 0);
}
export function __wbg_set_a_82818effc94f6256(arg0, arg1) {
    arg0.a = arg1;
}
export function __wbg_set_access_a099cfbbeec9b96f(arg0, arg1) {
    arg0.access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
}
export function __wbg_set_address_mode_u_a68737cf5d288f95(arg0, arg1) {
    arg0.addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
}
export function __wbg_set_address_mode_v_b1c3c45933f540d1(arg0, arg1) {
    arg0.addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
}
export function __wbg_set_address_mode_w_889c31cf7022c764(arg0, arg1) {
    arg0.addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
}
export function __wbg_set_alpha_106f21a936a85eba(arg0, arg1) {
    arg0.alpha = arg1;
}
export function __wbg_set_alpha_mode_5544568dbac50280(arg0, arg1) {
    arg0.alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
}
export function __wbg_set_alpha_to_coverage_enabled_3372ce329447b8f1(arg0, arg1) {
    arg0.alphaToCoverageEnabled = arg1 !== 0;
}
export function __wbg_set_array_layer_count_22afa0a979e4ad55(arg0, arg1) {
    arg0.arrayLayerCount = arg1 >>> 0;
}
export function __wbg_set_array_stride_f64_6816040e5e7598c3(arg0, arg1) {
    arg0.arrayStride = arg1;
}
export function __wbg_set_aspect_a48d046965270281(arg0, arg1) {
    arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
}
export function __wbg_set_aspect_b1a9909bf315433f(arg0, arg1) {
    arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
}
export function __wbg_set_attributes_9e38cb1dde387a5b(arg0, arg1, arg2) {
    arg0.attributes = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_b9b5b5cb7b495037(arg0, arg1, arg2) {
    arg0.set(getArrayU8FromWasm0(arg1, arg2));
}
export function __wbg_set_b_a3297ee7e7cac3a8(arg0, arg1) {
    arg0.b = arg1;
}
export function __wbg_set_base_array_layer_2435ba92c80346ae(arg0, arg1) {
    arg0.baseArrayLayer = arg1 >>> 0;
}
export function __wbg_set_base_mip_level_8b6093e875e7c65d(arg0, arg1) {
    arg0.baseMipLevel = arg1 >>> 0;
}
export function __wbg_set_beginning_of_pass_write_index_e552c5e8b8bbf52f(arg0, arg1) {
    arg0.beginningOfPassWriteIndex = arg1 >>> 0;
}
export function __wbg_set_bind_group_layouts_458c44ba55100b82(arg0, arg1, arg2) {
    arg0.bindGroupLayouts = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_binding_81b3fac7f7acaf8d(arg0, arg1) {
    arg0.binding = arg1 >>> 0;
}
export function __wbg_set_binding_b6cee57f35ac5190(arg0, arg1) {
    arg0.binding = arg1 >>> 0;
}
export function __wbg_set_blend_1a801617945f7945(arg0, arg1) {
    arg0.blend = arg1;
}
export function __wbg_set_body_f301b68bff45f419(arg0, arg1) {
    arg0.body = arg1;
}
export function __wbg_set_box_ba18accc4586ad2a(arg0, arg1) {
    arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
}
export function __wbg_set_buffer_1548ae88a9188037(arg0, arg1) {
    arg0.buffer = arg1;
}
export function __wbg_set_buffer_8d0ac64ad20dfc84(arg0, arg1) {
    arg0.buffer = arg1;
}
export function __wbg_set_buffers_5d0e0c50791f710e(arg0, arg1, arg2) {
    arg0.buffers = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_bytes_per_row_c28583f0063160f1(arg0, arg1) {
    arg0.bytesPerRow = arg1 >>> 0;
}
export function __wbg_set_cache_ab8f11813716fe29(arg0, arg1) {
    arg0.cache = __wbindgen_enum_RequestCache[arg1];
}
export function __wbg_set_clear_value_gpu_color_dict_a9f763e8372ac1de(arg0, arg1) {
    arg0.clearValue = arg1;
}
export function __wbg_set_code_5d5b0b9e2fd0dca7(arg0, arg1, arg2) {
    arg0.code = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_color_8ecace4011f47d2e(arg0, arg1) {
    arg0.color = arg1;
}
export function __wbg_set_color_attachments_622fe2d5997fda7a(arg0, arg1, arg2) {
    arg0.colorAttachments = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_compare_080c9e492ff36990(arg0, arg1) {
    arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_compare_817cf3695599eaa6(arg0, arg1) {
    arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_count_8ff0c9474e39a849(arg0, arg1) {
    arg0.count = arg1 >>> 0;
}
export function __wbg_set_credentials_d7f3b810cbf191e1(arg0, arg1) {
    arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
}
export function __wbg_set_cull_mode_85d2b4ab0ce3a564(arg0, arg1) {
    arg0.cullMode = __wbindgen_enum_GpuCullMode[arg1];
}
export function __wbg_set_depth_bias_95abf479cae3f3cd(arg0, arg1) {
    arg0.depthBias = arg1;
}
export function __wbg_set_depth_bias_clamp_ba3d0b8348151350(arg0, arg1) {
    arg0.depthBiasClamp = arg1;
}
export function __wbg_set_depth_bias_slope_scale_6b2584d93f5b9cd2(arg0, arg1) {
    arg0.depthBiasSlopeScale = arg1;
}
export function __wbg_set_depth_clear_value_e30a4c754c6b3b26(arg0, arg1) {
    arg0.depthClearValue = arg1;
}
export function __wbg_set_depth_compare_a90de4e3714397ab(arg0, arg1) {
    arg0.depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
}
export function __wbg_set_depth_fail_op_b5c64541d1b6b482(arg0, arg1) {
    arg0.depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_depth_load_op_932888016d762d3e(arg0, arg1) {
    arg0.depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_depth_or_array_layers_e2f074a0284e4806(arg0, arg1) {
    arg0.depthOrArrayLayers = arg1 >>> 0;
}
export function __wbg_set_depth_read_only_be790175a1c2db9a(arg0, arg1) {
    arg0.depthReadOnly = arg1 !== 0;
}
export function __wbg_set_depth_stencil_attachment_54a8922f5fbe08bf(arg0, arg1) {
    arg0.depthStencilAttachment = arg1;
}
export function __wbg_set_depth_stencil_b7cffc59ad4da529(arg0, arg1) {
    arg0.depthStencil = arg1;
}
export function __wbg_set_depth_store_op_9054814f164ab55d(arg0, arg1) {
    arg0.depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_depth_write_enabled_31a821ee1fb3b0b3(arg0, arg1) {
    arg0.depthWriteEnabled = arg1 !== 0;
}
export function __wbg_set_device_210484a77b675c9c(arg0, arg1) {
    arg0.device = arg1;
}
export function __wbg_set_dimension_3da9d03131a9f446(arg0, arg1) {
    arg0.dimension = __wbindgen_enum_GpuTextureDimension[arg1];
}
export function __wbg_set_dimension_56332450afa3e0c0(arg0, arg1) {
    arg0.dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_dst_factor_865ba9aaf187890c(arg0, arg1) {
    arg0.dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
}
export function __wbg_set_end_of_pass_write_index_8f164f9e60d4ad16(arg0, arg1) {
    arg0.endOfPassWriteIndex = arg1 >>> 0;
}
export function __wbg_set_entries_6f866302103b81e9(arg0, arg1, arg2) {
    arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_entries_f26b77ab9548e906(arg0, arg1, arg2) {
    arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_entry_point_71cef95c137b5774(arg0, arg1, arg2) {
    arg0.entryPoint = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_entry_point_b70f98f5025a114d(arg0, arg1, arg2) {
    arg0.entryPoint = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_external_texture_7f966c604c4f8098(arg0, arg1) {
    arg0.externalTexture = arg1;
}
export function __wbg_set_fail_op_d59d0187e4111dfe(arg0, arg1) {
    arg0.failOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_format_23f7f32549751d43(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_283dca56552f07a3(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_5080a858117ad2c1(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuVertexFormat[arg1];
}
export function __wbg_set_format_66735b94bd868ba2(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_7f2bdbfb101b1ae1(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_92732ea75d3b79f5(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_format_f009e603f7d4c28e(arg0, arg1) {
    arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
}
export function __wbg_set_fragment_d2b0ec97d7cf8d47(arg0, arg1) {
    arg0.fragment = arg1;
}
export function __wbg_set_front_face_d3f8a2e07e7b25dd(arg0, arg1) {
    arg0.frontFace = __wbindgen_enum_GpuFrontFace[arg1];
}
export function __wbg_set_g_b527ee8a9bed553d(arg0, arg1) {
    arg0.g = arg1;
}
export function __wbg_set_has_dynamic_offset_0c72ffa900c5a269(arg0, arg1) {
    arg0.hasDynamicOffset = arg1 !== 0;
}
export function __wbg_set_headers_805555608daf7f2a(arg0, arg1) {
    arg0.headers = arg1;
}
export function __wbg_set_height_ca39bd9597314f83(arg0, arg1) {
    arg0.height = arg1 >>> 0;
}
export function __wbg_set_height_d72f2b76484a44de(arg0, arg1) {
    arg0.height = arg1 >>> 0;
}
export function __wbg_set_height_f6619158e5735877(arg0, arg1) {
    arg0.height = arg1 >>> 0;
}
export function __wbg_set_id_ce80620265c5de8d(arg0, arg1, arg2) {
    arg0.id = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_17202740051e9722(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_2fefb39c0e0dbbe8(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_3cb2322e6f6db14c(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_3f2ccaafef5ff7c9(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_612add98a4398f92(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_70a09ee68d6b1b26(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_92cd3811e96b487c(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_9c2a186152427ee0(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_c3eaf136aa464cba(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_c7987704d29f284b(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_cfe64bca8945ee30(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_e02179cf97e95763(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_label_ee172cd5f6a96961(arg0, arg1, arg2) {
    arg0.label = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_layout_454e3a091b390cd4(arg0, arg1) {
    arg0.layout = arg1;
}
export function __wbg_set_layout_75dc1ca3f2421cff(arg0, arg1) {
    arg0.layout = arg1;
}
export function __wbg_set_layout_gpu_auto_layout_mode_06a2b95af1043098(arg0, arg1) {
    arg0.layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
}
export function __wbg_set_load_op_c56b1269acc2d51f(arg0, arg1) {
    arg0.loadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_lod_max_clamp_db24179f67f3aa31(arg0, arg1) {
    arg0.lodMaxClamp = arg1;
}
export function __wbg_set_lod_min_clamp_2bbce566e9fefa04(arg0, arg1) {
    arg0.lodMinClamp = arg1;
}
export function __wbg_set_mag_filter_db8e6b42d4f8846d(arg0, arg1) {
    arg0.magFilter = __wbindgen_enum_GpuFilterMode[arg1];
}
export function __wbg_set_mapped_at_creation_3f320fef6761b02c(arg0, arg1) {
    arg0.mappedAtCreation = arg1 !== 0;
}
export function __wbg_set_mask_c1079e551ec360dc(arg0, arg1) {
    arg0.mask = arg1 >>> 0;
}
export function __wbg_set_max_anisotropy_84749fdcec362dc4(arg0, arg1) {
    arg0.maxAnisotropy = arg1;
}
export function __wbg_set_method_cf2b992b9a610bc3(arg0, arg1, arg2) {
    arg0.method = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_min_binding_size_f64_897e3cd4496ddec9(arg0, arg1) {
    arg0.minBindingSize = arg1;
}
export function __wbg_set_min_filter_d435bbfc5a637757(arg0, arg1) {
    arg0.minFilter = __wbindgen_enum_GpuFilterMode[arg1];
}
export function __wbg_set_mip_level_count_047936c630acee7b(arg0, arg1) {
    arg0.mipLevelCount = arg1 >>> 0;
}
export function __wbg_set_mip_level_count_44bc46a1ae6f6daa(arg0, arg1) {
    arg0.mipLevelCount = arg1 >>> 0;
}
export function __wbg_set_mip_level_f3745730372683d5(arg0, arg1) {
    arg0.mipLevel = arg1 >>> 0;
}
export function __wbg_set_mipmap_filter_62fb49a84b0747ff(arg0, arg1) {
    arg0.mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
}
export function __wbg_set_mode_7edfbc344ef9c650(arg0, arg1) {
    arg0.mode = __wbindgen_enum_GpuCanvasToneMappingMode[arg1];
}
export function __wbg_set_mode_d6479dfd6696c8d3(arg0, arg1) {
    arg0.mode = __wbindgen_enum_RequestMode[arg1];
}
export function __wbg_set_module_392eeaa269f203b0(arg0, arg1) {
    arg0.module = arg1;
}
export function __wbg_set_module_715d37652c4998ec(arg0, arg1) {
    arg0.module = arg1;
}
export function __wbg_set_multisample_ff72a7a5456cbeb7(arg0, arg1) {
    arg0.multisample = arg1;
}
export function __wbg_set_multisampled_039f032dc4b67367(arg0, arg1) {
    arg0.multisampled = arg1 !== 0;
}
export function __wbg_set_offset_f64_127e8a0aa5c5485a(arg0, arg1) {
    arg0.offset = arg1;
}
export function __wbg_set_offset_f64_457756429ede426d(arg0, arg1) {
    arg0.offset = arg1;
}
export function __wbg_set_offset_f64_a903425d5a8e5815(arg0, arg1) {
    arg0.offset = arg1;
}
export function __wbg_set_onmessage_dd565ea8943164ac(arg0, arg1) {
    arg0.onmessage = arg1;
}
export function __wbg_set_operation_00a77386523b88f9(arg0, arg1) {
    arg0.operation = __wbindgen_enum_GpuBlendOperation[arg1];
}
export function __wbg_set_origin_gpu_origin_3d_dict_0619d4860adb4eb6(arg0, arg1) {
    arg0.origin = arg1;
}
export function __wbg_set_pass_op_3cf10feb3d76ab97(arg0, arg1) {
    arg0.passOp = __wbindgen_enum_GpuStencilOperation[arg1];
}
export function __wbg_set_power_preference_b42d00a8facfbade(arg0, arg1) {
    arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
}
export function __wbg_set_primitive_e796cf76f0ff89f3(arg0, arg1) {
    arg0.primitive = arg1;
}
export function __wbg_set_query_set_f030702f1b69199f(arg0, arg1) {
    arg0.querySet = arg1;
}
export function __wbg_set_r_6ece4d74af63364f(arg0, arg1) {
    arg0.r = arg1;
}
export function __wbg_set_required_features_bbab71414c45e621(arg0, arg1, arg2) {
    arg0.requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_required_limits_837f62d865e7cfac(arg0, arg1) {
    arg0.requiredLimits = arg1;
}
export function __wbg_set_resolve_target_gpu_texture_view_e4c1e3bbb8c27d87(arg0, arg1) {
    arg0.resolveTarget = arg1;
}
export function __wbg_set_resource_8fd8658b30d86ecf(arg0, arg1) {
    arg0.resource = arg1;
}
export function __wbg_set_resource_gpu_buffer_binding_33099b25da65b610(arg0, arg1) {
    arg0.resource = arg1;
}
export function __wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe(arg0, arg1) {
    arg0.resource = arg1;
}
export function __wbg_set_rows_per_image_c6d50d227e634379(arg0, arg1) {
    arg0.rowsPerImage = arg1 >>> 0;
}
export function __wbg_set_sample_count_481c255a12054e1d(arg0, arg1) {
    arg0.sampleCount = arg1 >>> 0;
}
export function __wbg_set_sample_type_ebc5fcd029513bda(arg0, arg1) {
    arg0.sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
}
export function __wbg_set_sampler_89cb4a7efcfc6005(arg0, arg1) {
    arg0.sampler = arg1;
}
export function __wbg_set_shader_location_3fb9f6a012eba494(arg0, arg1) {
    arg0.shaderLocation = arg1 >>> 0;
}
export function __wbg_set_signal_115b9e9423652e66(arg0, arg1) {
    arg0.signal = arg1;
}
export function __wbg_set_size_f64_2f591b0654540477(arg0, arg1) {
    arg0.size = arg1;
}
export function __wbg_set_size_f64_e844c985b8f95261(arg0, arg1) {
    arg0.size = arg1;
}
export function __wbg_set_size_gpu_extent_3d_dict_adf57388ab1d4f18(arg0, arg1) {
    arg0.size = arg1;
}
export function __wbg_set_src_factor_6f2c9ec8e4d3d979(arg0, arg1) {
    arg0.srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
}
export function __wbg_set_stencil_back_c54d0443b8b6a957(arg0, arg1) {
    arg0.stencilBack = arg1;
}
export function __wbg_set_stencil_clear_value_a321b0e045bfd8c2(arg0, arg1) {
    arg0.stencilClearValue = arg1 >>> 0;
}
export function __wbg_set_stencil_front_3ff3f8385852efff(arg0, arg1) {
    arg0.stencilFront = arg1;
}
export function __wbg_set_stencil_load_op_37d20deccb26a0f1(arg0, arg1) {
    arg0.stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
}
export function __wbg_set_stencil_read_mask_021ef4271b24352c(arg0, arg1) {
    arg0.stencilReadMask = arg1 >>> 0;
}
export function __wbg_set_stencil_read_only_75fe66a2356d6e92(arg0, arg1) {
    arg0.stencilReadOnly = arg1 !== 0;
}
export function __wbg_set_stencil_store_op_501f91638dd386e6(arg0, arg1) {
    arg0.stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_stencil_write_mask_ec1c12237e094bdd(arg0, arg1) {
    arg0.stencilWriteMask = arg1 >>> 0;
}
export function __wbg_set_step_mode_3cbbdeba1e5dfd62(arg0, arg1) {
    arg0.stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
}
export function __wbg_set_storage_texture_786aea7c5773b6c1(arg0, arg1) {
    arg0.storageTexture = arg1;
}
export function __wbg_set_store_op_678f33376d741711(arg0, arg1) {
    arg0.storeOp = __wbindgen_enum_GpuStoreOp[arg1];
}
export function __wbg_set_strip_index_format_70313df755145d5e(arg0, arg1) {
    arg0.stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
}
export function __wbg_set_targets_674b33931e512fb1(arg0, arg1, arg2) {
    arg0.targets = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_texture_95f2bfdf7767e76f(arg0, arg1) {
    arg0.texture = arg1;
}
export function __wbg_set_texture_a33be3fe02ac6264(arg0, arg1) {
    arg0.texture = arg1;
}
export function __wbg_set_timestamp_writes_de6a09f299b71b76(arg0, arg1) {
    arg0.timestampWrites = arg1;
}
export function __wbg_set_tone_mapping_320c1aad31db2e7f(arg0, arg1) {
    arg0.toneMapping = arg1;
}
export function __wbg_set_topology_b92cfe523bd9653b(arg0, arg1) {
    arg0.topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
}
export function __wbg_set_type_062a978c6946048f(arg0, arg1, arg2) {
    arg0.type = getStringFromWasm0(arg1, arg2);
}
export function __wbg_set_type_43e0092f16775979(arg0, arg1) {
    arg0.type = __wbindgen_enum_GpuSamplerBindingType[arg1];
}
export function __wbg_set_type_79cec55caf4cdb6d(arg0, arg1) {
    arg0.type = __wbindgen_enum_GpuBufferBindingType[arg1];
}
export function __wbg_set_unclipped_depth_32b7caf29fa5633d(arg0, arg1) {
    arg0.unclippedDepth = arg1 !== 0;
}
export function __wbg_set_usage_1ee33d98267e787d(arg0, arg1) {
    arg0.usage = arg1 >>> 0;
}
export function __wbg_set_usage_2365e2704b1fdb10(arg0, arg1) {
    arg0.usage = arg1 >>> 0;
}
export function __wbg_set_usage_d53ee6f0c7aedbfa(arg0, arg1) {
    arg0.usage = arg1 >>> 0;
}
export function __wbg_set_usage_f3e34822998d2147(arg0, arg1) {
    arg0.usage = arg1 >>> 0;
}
export function __wbg_set_vertex_77ed7a1229239b5a(arg0, arg1) {
    arg0.vertex = arg1;
}
export function __wbg_set_view_dimension_893e2d16561e56e8(arg0, arg1) {
    arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_view_dimension_f2c5fe4bf927c3fe(arg0, arg1) {
    arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
}
export function __wbg_set_view_formats_427069064d8b7139(arg0, arg1, arg2) {
    arg0.viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_view_formats_9c2f01a6f3b365c7(arg0, arg1, arg2) {
    arg0.viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
}
export function __wbg_set_view_gpu_texture_view_35f4655788535c4d(arg0, arg1) {
    arg0.view = arg1;
}
export function __wbg_set_view_gpu_texture_view_a532c825c52042c0(arg0, arg1) {
    arg0.view = arg1;
}
export function __wbg_set_visibility_d8a6821789538c25(arg0, arg1) {
    arg0.visibility = arg1 >>> 0;
}
export function __wbg_set_width_36ef6630b22fc519(arg0, arg1) {
    arg0.width = arg1 >>> 0;
}
export function __wbg_set_width_661c95ea46b71eba(arg0, arg1) {
    arg0.width = arg1 >>> 0;
}
export function __wbg_set_width_b20525f5f4df4eb8(arg0, arg1) {
    arg0.width = arg1 >>> 0;
}
export function __wbg_set_write_mask_42d89f182ade6b2d(arg0, arg1) {
    arg0.writeMask = arg1 >>> 0;
}
export function __wbg_set_x_f470b03dd54724cd(arg0, arg1) {
    arg0.x = arg1 >>> 0;
}
export function __wbg_set_y_4c44eb40ebca5bfc(arg0, arg1) {
    arg0.y = arg1 >>> 0;
}
export function __wbg_set_z_2e6820ef0f5821ed(arg0, arg1) {
    arg0.z = arg1 >>> 0;
}
export function __wbg_shiftKey_8eca009f693152b4(arg0) {
    const ret = arg0.shiftKey;
    return ret;
}
export function __wbg_shiftKey_d24455602deb3490(arg0) {
    const ret = arg0.shiftKey;
    return ret;
}
export function __wbg_signal_58449b7eb331d1be(arg0) {
    const ret = arg0.signal;
    return ret;
}
export function __wbg_size_00652f74c831ee7c(arg0) {
    const ret = arg0.size;
    return ret;
}
export function __wbg_stack_3b0d974bbf31e44f(arg0, arg1) {
    const ret = arg1.stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_start_f930e0b647ad5e8d(arg0) {
    arg0.start();
}
export function __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_GLOBAL_c7aea38d4de089bc() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_SELF_42d4fae05e59267a() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_static_accessor_WINDOW_e0db14a0eba6a812() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_status_b0de02a07fd7d927(arg0) {
    const ret = arg0.status;
    return ret;
}
export function __wbg_style_f09d6445af3dd2c6(arg0) {
    const ret = arg0.style;
    return ret;
}
export function __wbg_submit_077c85cc28e36892(arg0, arg1, arg2) {
    arg0.submit(getArrayJsValueViewFromWasm0(arg1, arg2));
}
export function __wbg_then_7026b513a94278a8(arg0, arg1) {
    const ret = arg0.then(arg1);
    return ret;
}
export function __wbg_then_72819b8d4e081fb5(arg0, arg1, arg2) {
    const ret = arg0.then(arg1, arg2);
    return ret;
}
export function __wbg_unconfigure_835307f58dc68d80(arg0) {
    arg0.unconfigure();
}
export function __wbg_unmap_6a96b14c9ef5f7f5(arg0) {
    arg0.unmap();
}
export function __wbg_unobserve_9ac8d86971d3a8d3(arg0, arg1) {
    arg0.unobserve(arg1);
}
export function __wbg_url_82c95d5d2e2ba977(arg0, arg1) {
    const ret = arg1.url;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
export function __wbg_usage_eb336a28af1c9fcf(arg0) {
    const ret = arg0.usage;
    return ret;
}
export function __wbg_userAgentData_31b8f893e8977e94(arg0) {
    const ret = arg0.userAgentData;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_userAgent_adc3e375481683f8() { return handleError(function (arg0, arg1) {
    const ret = arg1.userAgent;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments); }
export function __wbg_value_1e2369fab29b420e(arg0) {
    const ret = arg0.value;
    return ret;
}
export function __wbg_view_7685fe4b2845c5b6(arg0) {
    const ret = arg0.view;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_visibilityState_78b3e77642525a69(arg0) {
    const ret = arg0.visibilityState;
    return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
}
export function __wbg_warn_917d7f727ab78481(arg0) {
    console.warn(arg0);
}
export function __wbg_webkitFullscreenElement_4055d847f8ff064e(arg0) {
    const ret = arg0.webkitFullscreenElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}
export function __wbg_webkitRequestFullscreen_c4ec4df7be373ffd(arg0) {
    arg0.webkitRequestFullscreen();
}
export function __wbg_width_25247161d477c7d5(arg0) {
    const ret = arg0.width;
    return ret;
}
export function __wbg_writeBuffer_f4bb3f54adfe1330() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    arg0.writeBuffer(arg1, arg2, getArrayU8FromWasm0(arg3, arg4), arg5, arg6);
}, arguments); }
export function __wbg_writeTexture_30e592e8c061c3d9() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    arg0.writeTexture(arg1, getArrayU8FromWasm0(arg2, arg3), arg4, arg5);
}, arguments); }
export function __wbindgen_cast_0000000000000001(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true_);
    return ret;
}
export function __wbindgen_cast_0000000000000002(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 958, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_);
    return ret;
}
export function __wbindgen_cast_0000000000000003(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 912, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Array__web_sys_1c6d48d9a03e7c7d___features__gen_ResizeObserver__ResizeObserver______true_);
    return ret;
}
export function __wbindgen_cast_0000000000000004(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__3);
    return ret;
}
export function __wbindgen_cast_0000000000000005(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__4);
    return ret;
}
export function __wbindgen_cast_0000000000000006(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__5);
    return ret;
}
export function __wbindgen_cast_0000000000000007(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 526, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_);
    return ret;
}
export function __wbindgen_cast_0000000000000008(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__7);
    return ret;
}
export function __wbindgen_cast_0000000000000009(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__8);
    return ret;
}
export function __wbindgen_cast_000000000000000a(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__9);
    return ret;
}
export function __wbindgen_cast_000000000000000b(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 911, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__10);
    return ret;
}
export function __wbindgen_cast_000000000000000c(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 526, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__11);
    return ret;
}
export function __wbindgen_cast_000000000000000d(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 526, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__12);
    return ret;
}
export function __wbindgen_cast_000000000000000e(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 335, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true_);
    return ret;
}
export function __wbindgen_cast_000000000000000f(arg0, arg1) {
    // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 910, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
    const ret = makeMutClosure(arg0, arg1, wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true__1_);
    return ret;
}
export function __wbindgen_cast_0000000000000010(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
}
export function __wbindgen_cast_0000000000000011(arg0, arg1) {
    // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
    const ret = getArrayU8FromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_cast_0000000000000012(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}
function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true__1_(arg0, arg1) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke_______true__1_(arg0, arg1);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true_(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__3(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__3(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__4(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__4(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__5(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__5(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__7(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__7(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__8(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__8(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__9(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__9(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__10(arg0, arg1, arg2) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue______true__10(arg0, arg1, arg2);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___JsValue__core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__11(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__11(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__12(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___wasm_bindgen_510e49eb66ccd315___sys__JsNullable_wgpu_4b0d8f1166598653___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_ed718c3d60ebd546___result__Result_____wasm_bindgen_510e49eb66ccd315___JsError___true__12(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Array__web_sys_1c6d48d9a03e7c7d___features__gen_ResizeObserver__ResizeObserver______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Array__web_sys_1c6d48d9a03e7c7d___features__gen_ResizeObserver__ResizeObserver______true_(arg0, arg1, arg2, arg3);
}

function wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined_______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_510e49eb66ccd315___convert__closures_____invoke___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined___js_sys_cd896c4a87b0d996___Function_fn_wasm_bindgen_510e49eb66ccd315___JsValue_____wasm_bindgen_510e49eb66ccd315___sys__Undefined_______true_(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];


const __wbindgen_enum_GpuAutoLayoutMode = ["auto"];


const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];


const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];


const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];


const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];


const __wbindgen_enum_GpuCanvasToneMappingMode = ["standard", "extended"];


const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];


const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];


const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];


const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];


const __wbindgen_enum_GpuLoadOp = ["load", "clear"];


const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];


const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];


const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];


const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];


const __wbindgen_enum_GpuStoreOp = ["store", "discard"];


const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];


const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];


const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];


const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];


const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];


const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];


const __wbindgen_enum_ReadableStreamType = ["bytes"];


const __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];


const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];


const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];
const IntoUnderlyingByteSourceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingbytesource_free(ptr, 1));
const IntoUnderlyingSinkFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsink_free(ptr, 1));
const IntoUnderlyingSourceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_intounderlyingsource_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayJsValueViewFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    return result;
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}
