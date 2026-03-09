import toast from 'react-hot-toast';

class Helpers {
  // Base API URL – set this in your .env.local file
  static apiUrl = 'http://localhost:5000/api/v1';

  // Authentication token key
  static tokenKey = 'accessToken';
  static userKey = 'user';

  // ========== LocalStorage helpers ==========
  static getItem(key: string, isJson = false): any {
    if (typeof window === 'undefined') return null; // guard for SSR
    const item = localStorage.getItem(key);
    if (!item) return null;
    if (isJson) {
      try {
        return JSON.parse(item);
      } catch {
        return null;
      }
    }
    return item;
  }

  static setItem(key: string, data: any, isJson = false): void {
    if (typeof window === 'undefined') return;
    if (isJson) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }

  static removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  }

  // ========== Auth specific ==========
  static getToken(): string | null {
    return this.getItem(this.tokenKey);
  }

  static setToken(token: string): void {
    this.setItem(this.tokenKey, token);
  }

  static getUser(): any {
    return this.getItem(this.userKey, true);
  }

  static setUser(user: any): void {
    this.setItem(this.userKey, user, true);
  }

  static clearAuth(): void {
    this.removeItem(this.tokenKey);
    this.removeItem(this.userKey);
  }

  // ========== Axios headers ==========
  static getAuthHeaders() {
    const token = this.getToken();
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  }

  static getAuthFileHeaders() {
    const token = this.getToken();
    return {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  }

  static getHeaders() {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  // ========== Toast notifications ==========
  static toastSuccess(message: string) {
    toast.success(message, {
      position: 'top-right',
      duration: 2000,
    });
  }

  static toastError(message: string) {
    toast.error(message, {
      position: 'top-right',
      duration: 3000,
    });
  }

  static toastInfo(message: string) {
    toast(message, {
      position: 'top-right',
      duration: 2000,
    });
  }

  // ========== Utility ==========
  static scrollToTop(smooth = true) {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
  }

  // Optional: Format strings (example)
  static formatWords(status: string): string {
    if (!status) return '';
    return status
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}

export default Helpers;