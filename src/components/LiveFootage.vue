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
    <video width="140" height="240" controls>
      <source
        src="https://rr2---sn-5go7ynl6.c.drive.google.com/videoplayback?expire=1677005644&ei=DNv0Y_6NJYKBpb0P0oqzmAo&ip=90.235.4.235&cp=QVRMWUFfVFZSRVhPOjlMX2FYTlBidXJUM0xRRTlGb3Z6eHVfbmg2M0FOemFuTXU5VDVUS0IyQ1U&id=8c545bf697b09231&itag=22&source=webdrive&requiressl=yes&mh=pr&mm=32&mn=sn-5go7ynl6&ms=su&mv=m&mvi=2&pl=23&ttl=transient&susc=dr&driveid=1pDUTzcezGNANs1mSSxUEZVtUk79k8Kk_&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=9.357&lmt=1676989857353744&mt=1676990957&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhANYil7UcgCHLqQXNPsYz3diD7GUsWVnXRaaQTGGyIgQFAiABL5AujoDmbaulimEe6q2ulhUGc_M77IfW8awiXJ6FhA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAM6VjOy6fEEv0I2FF33_XX6W9BlR_xlTPY29CfPCTEouAiA8_KmvIzTrMrfoDfKdW6Jr8JwAyesq92YHvVtuV6fKHg==&cpn=5pfWTJBh8_rJFkWC&c=WEB_EMBEDDED_PLAYER&cver=1.20230215.01.00"
        type="video/mp4"
      />
      <source src="" type="video/mp4">
      Din browser stödjer inte video
    </video>
  </section>
</template>

<style scoped lang="scss">
@import '../style/variables';
section {
  height: calc(100vh - $header-height);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
