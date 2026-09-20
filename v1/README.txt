Nano PC sürümünün ses dosyaları.

voice-engine.js   ses motoru (güncellenebilir -> kısa önbellek)
voice-en/         ses modeli (içeriği sabit -> bir yıl önbellek)
ort-*.wasm/.mjs   çalışma zamanı (sabit -> bir yıl önbellek)

DİKKAT: voice-engine.js'e "immutable" önbellek VERİLMEZ. Verildiğinde
ölçüldü (2026-09-21): yeni sürüm yayına alındığı halde tarayıcı bir yıllık
önbellekten eski dosyayı kullandı, düzeltmeler hiç ulaşmadı.

Bu klasör elle düzenlenmez. Üreten betik:
  biba-native/scripts/audio/build-voice-engine.mjs
