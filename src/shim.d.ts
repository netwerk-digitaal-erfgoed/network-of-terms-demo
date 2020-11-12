declare const __VP_HASH_MAP__: Record<string, string>;

declare module '*.vue' {
    import {ComponentOptions} from 'vue';
    const comp: ComponentOptions;
    export default comp;
}
