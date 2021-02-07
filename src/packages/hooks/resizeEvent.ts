import { onUnmounted } from 'vue';
import debounce from 'lodash/debounce';

export default (fn: () => void, time = 100) => {
    const cb = debounce(fn, time);
    window.addEventListener('resize', cb);
    onUnmounted(() => {
        window.removeEventListener('resize', cb);
    });
};
