/**
 * Social bar services
 * @module socialBarServices
 */

const socialBarServices = [{
  icon: 'twitter',
  url: (url) => {
    return `https://twitter.com/intent/tweet/?text=&url=${url}`
  }
}, {
  icon: 'facebook',
  url: (url) => {
    return `https://facebook.com/sharer/sharer.php?u=${url}`
  }
}, {
  icon: 'pinterest',
  url: (url) => {
    return `https://pinterest.com/pin/create/button/?url=${url}`
  }
}, {
  icon: 'linkedin',
  url: (url) => {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`
  }
}, {
  icon: 'xing',
  url: (url) => {
    return `https://www.xing.com/app/user?op=share;title=;url=${url}`
  }
}, {
  icon: 'reddit',
  url: (url) => {
    return `https://reddit.com/submit/?url=${url}`
  }
}, {
  icon: 'tumblr',
  url: (url) => {
    return `https://www.tumblr.com/widgets/share/tool?posttype=link&title=&caption=&shareSource=tumblr_share_button&content=${url}&canonicalUrl=${url}`
  }
}, {
  icon: 'whatsapp',
  url: (url, siteTitle) => {
    return `whatsapp://send?text=${encodeURIComponent(siteTitle)} ${url}`
  }
}, {
  icon: 'rss',
  url: () => {
    return `http://feeds.feedburner.com/acidmartin`
  }
}, {
  icon: 'email',
  url: (url, siteTitle) => {
    return `mailto:?subject=${siteTitle}&body=${url}`
  }
}]

export default socialBarServices
