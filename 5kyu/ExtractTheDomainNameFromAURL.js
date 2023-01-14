/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
    if(url.includes('www.')){
      return url.slice(url.indexOf('www.')+4, url.indexOf('.', url.indexOf('www.')+4))
      
      } else if (url.includes('//')){
        return url.slice(url.indexOf('//') + 2, url.indexOf('.'))  
      } else return url.slice(0, url.indexOf('.'))
  }