<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <section>
    <h2>Live footage page</h2>
    <p>Såhär kan elbasen låta live</p>
    <div class="videos">
      <video height="400" controls>
        <source
          src="https://rr2---sn-5go7ynl6.c.drive.google.com/videoplayback?expire=1677093488&ei=MDL2Y-PXMcqEu7APzpe7-Aw&ip=90.235.11.226&cp=QVRMWUFfUlRWSVhPOlRvWTNwaUpUMjAwUUtBbl9YamREdU5ET2xkWGpyZk96WWNpRGRVbHBldHg&id=8c545bf697b09231&itag=22&source=webdrive&requiressl=yes&mh=pr&mm=32&mn=sn-5go7ynl6&ms=su&mv=m&mvi=2&pl=21&ttl=transient&susc=dr&driveid=1pDUTzcezGNANs1mSSxUEZVtUk79k8Kk_&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=9.357&lmt=1676989857353744&mt=1677078797&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIgCw4R5jPLHAXt057cOvcuZb7PUesDo6Uhbe8Iey5QVqkCIQCNY_2gp0LDWZHbnFbCrRiZ-k40PbUZi7VXQAz7MNnCFQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgESylSnoNhv3TNREPTSbgUkuYXEvGlkSWU6vrLYZYpF0CIQCQwA2O8ZdganPgReybFmHa7SG_mph8Cn6Dl9N0lFmH2g==&cpn=hHiyNbDK6gM79eZt&c=WEB_EMBEDDED_PLAYER&cver=1.20230215.01.00"
          type="video/mp4"
        />
        Din browser stödjer inte video
      </video>
      <video height="400" controls>
        <source
          src="https://rr2---sn-5go7ynl6.c.drive.google.com/videoplayback?expire=1677095133&ei=nTj2Y9uWCIas2bQPwui8sA8&ip=90.235.11.226&cp=QVRMWUFfVFFRRFhPOlRvWTVtZEVUMjAwUUtDa19TamREdU5EUWl5U2pyZk96WWVmWXlVbHBldHg&id=c39c2e7512cfa786&itag=18&source=webdrive&requiressl=yes&mh=jZ&mm=32&mn=sn-5go7ynl6&ms=su&mv=m&mvi=2&pl=21&sc=yes&ttl=transient&susc=dr&driveid=1aA8FoSm-eR4fCXYyijKqET5i_QZnYxz3&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.139&lmt=1676993107320727&mt=1677080242&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgVSzEOFKBu8KNjzUmh9zxahoy6KRum48Q5orY6lhZcUQCIG2Nz446N4LI-_gtrQpucZ_frJ_H1gZQiz2nC1kGMNTr&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRQIgLw41LhJLaxjbpgKXydLRLh6dZHK4N8N-xzOkrYsSLSgCIQDffosMR9wdos20wtEOoynS7_ee_CFG2a8Q2oL-ILvLJw==&cpn=X5GjlkAPap-1wstz&c=WEB_EMBEDDED_PLAYER&cver=1.20230215.01.00"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../style/variables';
section {
  height: calc(100vh - $header-height);
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  align-self: flex-start;
}

.videos {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
