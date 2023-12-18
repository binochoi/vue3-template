/**
 * detect history back changes just once
 */
export class HistoryTrap {
    private isCatched = false;

    private catchCallback?: () => void;

    bury(key: string) {
      window.history.pushState({}, '', `#${key}`);
      const onBack = () => {
        window.removeEventListener('popstate', onBack);
        this.isCatched = true;
        if (this.catchCallback) {
          this.catchCallback();
        }
      };
      window.addEventListener('popstate', onBack);
    }

    onCatch(callback?: () => void) {
      this.catchCallback = callback;
    }

    catch() {
      if (this.isCatched) {
        return;
      }
      window.history.back();
    }
}
