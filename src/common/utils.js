/**
 @method getCookie
 @param {string} name
 */
export const getCookie = name => {
  const results = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return results ? decodeURIComponent(results[2]) : null;
};

/**
     @method setCookie
     @param {string} name
     @param {string} value
     @param {object} opts
     */
export const setCookie = async (name, value, opts) => {
  let cookieStr = `${name}=${escape(value)}`;
  const options = {
    expiryDays: 365,
    path: '/',
    SameSite: 'Strict',
    ...opts,
  };

  if (options.expiryDays !== 0) {
    const date = new Date();
    date.setDate(date.getDate() + options.expiryDays);
    cookieStr += `; expires=${date.toGMTString()}`;
  }
  if (options.domain) {
    cookieStr += `; domain=${options.domain}`;
  }
  document.cookie = `${cookieStr}; path=${options.path}`;
};

/**
     @method deleteCookie
     @param {string} name
     @param {string} pathValue
     */
export const deleteCookie = (name, pathValue, domainName) => {
  let options = {
    expiryDays: -1,
  };

  if (pathValue) {
    options.pathValue = pathValue;
  }
  if (domainName) {
    options.domain = domainName;
  }
  setCookie(name, '', options);
};

// eslint-disable-next-line
export const getURLParameter = name => {
  return (
    decodeURIComponent(
      // eslint-disable-next-line
      (new RegExp(`[?|&]${name}=` + `([^&;]+?)(&|#|;|$)`).exec(window.location.search) || [null, ''])[1].replace(
        /\+/g,
        '%20',
      ),
    ) || null
  );
};

//ellipsed text
export const textEllipsis = (text, max) => {
  if (text && max) {
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
  } else {
    return text || '';
  }
};

export function generateId() {
  // implementation taken from http://stackoverflow.com/a/2117523
  var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  id = id.replace(/[xy]/g, c => {
    var r = Math.floor(Math.random() * 16);

    var v;
    if (c === 'x') {
      v = r;
    } else {
      v = (r & 0x3) | 0x8;
    }

    return v.toString(16);
  });

  return id;
}

export function isEmptyObject(object) {
  if (!object) {
    return true;
  }

  if (Object.keys(object).length === 0) {
    return true;
  }

  return false;
}

export const isArray = data => {
  return Object.prototype.toString.call(data) === '[object Array]';
};

export function copyToClipboard(data) {
  // creates a tiny temporary text area to copy text out of
  // see https://stackoverflow.com/a/30810322/591374 for details
  var textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = data;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

export const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
);
