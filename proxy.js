import http from 'http'; import https from 'https'
const fetch = url => (url.startsWith('https')?https:http)
  .get(url, r => { let d=''; r.on('data',c=>d+=c); r.on('end',()=>process.stdout.write(d)) })
  .on('error', e=>console.error('ERROR',e.message))
const url = process.argv[2]; if(!url){ console.log('Usage: node proxy.js <url>'); process.exit(1) }
fetch(url)
