# Nano — PC sürümü varlıkları

Nano'nun bilgisayar sürümünün indirdiği ses ve tanıma dosyaları.
Bu dal elle düzenlenmez; üreten betik:
`biba-native/scripts/audio/build-voice-engine.mjs`

Neden burada: tarayıcı bu dosyaları JavaScript ile indiriyor, bu yüzden
sunucunun CORS izni vermesi gerekiyor. GitHub Releases vermiyor (ölçüldü
2026-09-21: tarayıcıdan `Failed to fetch`), GitHub Pages veriyor.
