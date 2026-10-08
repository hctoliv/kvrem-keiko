(() => {
  // contato da bio do Instagram (@kvremkeiko)
  const EMAIL = 'kvremkeiko@gmail.com';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const hasGsap = !!(window.gsap && window.ScrollTrigger);
  const motion = hasGsap && !reduce;

  /* ================= idiomas ================= */
  // o português fica no HTML; aqui só o japonês
  const JA = {
    'nav.jobs': '仕事', 'nav.uni': '世界観', 'nav.about': 'プロフィール', 'nav.contact': 'お問い合わせ', 'nav.cta': '依頼',
    'hero.alt': '日本語プリントのコリンチャンスのユニフォームを着たカレム・ケイコ',
    'hero.eyebrow': 'content creator &amp; creative copywriter · サンパウロ',
    'hero.tagline': 'ファッション、<br>スニーカー、<br><mark>サッカー。</mark>',
    'hero.s1': 'フォロワー', 'hero.s2': '投稿', 'hero.s3': '拠点', 'hero.cta': '依頼する', 'hero.hint': 'スクロール',
    'man.eyebrow': 'マニフェスト',
    'man.text': 'ファッション、スニーカー、サッカーをつなぐ。クリエイティブと<mark>コリンチャンス</mark>で生きてる、サンパウロ。',
    'jobs.eyebrow': 'Jobs / 仕事',
    'jobs.title': 'PR、コラボ、<mark>エディトリアル。</mark>',
    'jobs.c1': '@hypebeastbr と東京へ。街のスポット、東京タワー、そして @onitsukatigerofficial で見つけた理想の一足。「ありがとう、Hypebeast」',
    'jobs.k1t': 'POR AÍ',
    'jobs.k1p': 'あちこち。NYC 2026。東京。渋谷。ティモンのスタンド。',
    'jobs.c2': '「Lacoste Slam Break と過ごす一日 🐊 快適さはそのままに、ルックがもっとおしゃれに、もっと私らしくなった」',
    'jobs.c3': '「Lacoste の新しい Slam Break を開封 🐊❤️ ブランドの伝統を受け継いだモダンなデザイン、どんな場面にも」',
    'jobs.k2t': '👩🏻‍💻✍️',
    'jobs.k2p': 'クリエイティブコピーライター。台本もキャプションも本人が書く。',
    'jobs.c4': '「@cif.limpadores の SuperCif を試すサインはこれ ✨ 今回はアクセサリー、サンダル、鏡で試してみた」',
    'jobs.c5': '夜、BAPE、NYキャップ。撮影は @montrikfilmes。',
    'uni.eyebrow': '世界観',
    'uni.title': 'LOOKS、ON FEET、<mark>CAMISAS TIMAO。</mark>',
    'uni.p1': '月ごとのカルーセルで見せる今日のコーデ。「8月 💫🖤」「お祝いの9月 💫🍾」。ハイライト：LOOKS 2026。',
    'uni.t1': '<li>今日のコーデ</li><li>Get ready</li><li>On feet</li>',
    'uni.p2': '「ついに完成！箱が嫌いだった人も、好きだった人も喜んで […] これで全部のスニーカーが見えて、全部ちゃんと履ける」ハイライト：ON FEET。',
    'uni.t2': '<li>コレクション</li><li>開封</li><li>DIY</li>',
    'uni.p3': '「コリンチャンス116周年、愛してる、共に生きてる!!! 🖤」ハイライト：CAMISAS TIMAO（ティモンのユニフォーム）。',
    'uni.t3': '<li>ティモン</li><li>スタンド</li><li>ユニフォーム</li>',
    'about.eyebrow': 'プロフィール',
    'about.lead': 'content creator &amp; creative copywriter。<br>クリエイティブとコリンチャンスで生きてる、サンパウロ。',
    'about.p': '「仲間と @bkttlapa で、castelos &amp; ruínas 10周年」',
    'about.f1k': 'Instagram', 'about.f2k': '拠点', 'about.f2v': 'ブラジル・サンパウロ',
    'about.f3k': 'フォーマット', 'about.f3v': 'リール · カルーセル · ストーリーズ · コピー', 'about.f4k': '連絡先',
    'air.title': 'ON FEET、<mark>POR AÍ。</mark>',
    'feed.eyebrow': 'フィード', 'feed.title': '8月、<mark>お祝いの9月。</mark>', 'feed.follow': '@kvremkeiko をフォロー',
    'drop.eyebrow': 'ブランドの方へ',
    'drop.title': '<mark>ドロップ</mark>を組む。',
    'drop.sub': '世界観、フォーマット、ブランド、時期。提案メールがそのまま届きます。',
    'drop.l1': '世界観', 'drop.l2': 'フォーマット', 'drop.l3': 'ブランド', 'drop.l4': 'お名前', 'drop.l5': '時期', 'drop.l6': '予算', 'drop.l7': 'アイデア',
    'drop.opt': '(任意)',
    'drop.ph3': 'ブランド名', 'drop.ph4': 'ご担当者名', 'drop.ph5': '例：11月、20日ローンチ', 'drop.ph7': '商品、キャンペーン、イメージしていること…',
    'drop.v0': '相談して決める', 'drop.v1': '商品提供 / ギフティング', 'drop.v2': '2,000レアルまで', 'drop.v3': '2,000〜5,000レアル', 'drop.v4': '5,000レアル以上',
    'drop.send': '提案を送る', 'drop.gmail': 'Gmailで開く', 'drop.direct': 'メールで直接', 'drop.copy': 'コピー',
    'box.brand': 'ブランド', 'box.uni': '世界観', 'box.fmt': 'フォーマット', 'box.when': '時期',
    'mini.aria': 'ドロップのラベルを見る',
    'foot.creds': 'content creator &amp; creative copywriter<br>ファッション、スニーカー、サッカーをつなぐ<br>ブラジル・サンパウロ',
    'foot.top': 'トップへ戻る ↑'
  };
  const UI = {
    pt: {
      uni: [['moda', 'Moda', 'ファッション'], ['sneakers', 'Sneakers', 'スニーカー'], ['futebol', 'Futebol', 'サッカー'], ['lifestyle', 'Lifestyle', 'ライフ']],
      fmt: [['reels', 'Reels'], ['carrossel', 'Carrossel'], ['stories', 'Stories'], ['unboxing', 'Unboxing'], ['vlog', 'Vlog'], ['copy', 'Copy criativo'], ['evento', 'Evento / presença'], ['campanha', 'Campanha / modelo']],
      errBrand: 'Qual é a marca?',
      errName: 'E o seu nome?',
      copied: 'copiado ✓', copy: 'copiar', swap: 'PORTUGUÊS', cursorPlay: 'Play', cursorDrag: 'Arraste'
    },
    ja: {
      uni: [['moda', 'ファッション', 'Moda'], ['sneakers', 'スニーカー', 'Sneakers'], ['futebol', 'サッカー', 'Futebol'], ['lifestyle', 'ライフ', 'Lifestyle']],
      fmt: [['reels', 'リール'], ['carrossel', 'カルーセル'], ['stories', 'ストーリーズ'], ['unboxing', '開封動画'], ['vlog', 'Vlog'], ['copy', 'コピーライティング'], ['evento', 'イベント出演'], ['campanha', 'キャンペーン / モデル']],
      errBrand: 'ブランド名を入力してください。',
      errName: 'お名前を入力してください。',
      copied: 'コピー済み ✓', copy: 'コピー', swap: '日本語', cursorPlay: '再生', cursorDrag: 'ドラッグ'
    }
  };

  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
  const PT = {};
  $$('[data-i18n]').forEach(el => { PT[el.dataset.i18n] = el.innerHTML; });
  const PT_PH = {}; $$('[data-i18n-ph]').forEach(el => { PT_PH[el.dataset.i18nPh] = el.placeholder; });
  const PT_ARIA = {};
  const PT_ALT = {}; $$('[data-i18n-alt]').forEach(el => { PT_ALT[el.dataset.i18nAlt] = el.alt; });
  // texto cru das frases animadas (antes de quebrar em palavras)
  const RAW = new Map();
  $$('[data-split], [data-words], [data-scrub]').forEach(el => RAW.set(el, el.innerHTML));

  let lang = (store.get('kk-lang') || (/^ja/i.test(navigator.language || '') ? 'ja' : 'pt')) === 'ja' ? 'ja' : 'pt';

  /* ================= quebra em palavras (no japonês, por caractere) ================= */
  const split = (el, inner) => {
    let i = 0;
    const ja = lang === 'ja';
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          // no japonês, caractere por caractere, mas palavras em alfabeto latino ficam inteiras
          const parts = ja ? (n.textContent.match(/[A-Za-zÀ-ÿ0-9’'@#&.,:;!?\-_/“”"]+|\s+|./gu) || []) : n.textContent.split(/(\s+)/);
          parts.forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(' '); return; }
            const w = document.createElement('span');
            w.className = 'w';
            const d = (i++ * (ja ? .025 : .06)) + 's';
            if (inner) { const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--d', d); w.append(s); }
            else { w.textContent = part; w.style.setProperty('--d', d); }
            frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
      });
    };
    walk(el);
  };

  const applyLang = () => {
    const ja = lang === 'ja';
    document.documentElement.lang = ja ? 'ja' : 'pt-BR';
    $$('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      const v = ja ? JA[k] : PT[k];
      if (v == null) return;
      if (RAW.has(el)) RAW.set(el, v); else el.innerHTML = v;
    });
    $$('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; el.placeholder = ja ? (JA[k] || PT_PH[k]) : PT_PH[k]; });
    $$('[data-i18n-alt]').forEach(el => { const k = el.dataset.i18nAlt; el.alt = ja ? (JA[k] || PT_ALT[k]) : PT_ALT[k]; });
    $$('[data-i18n-aria]').forEach(el => { const k = el.dataset.i18nAria; if (!PT_ARIA[k]) PT_ARIA[k] = el.getAttribute('aria-label'); el.setAttribute('aria-label', ja ? (JA[k] || PT_ARIA[k]) : PT_ARIA[k]); });
    // frases animadas: reescreve e quebra de novo, mantendo o estado de entrada
    RAW.forEach((raw, el) => {
      const wasIn = el.classList.contains('is-in');
      el.innerHTML = raw;
      split(el, el.hasAttribute('data-split'));
      if (wasIn) el.classList.add('is-in');
    });
    $$('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    $$('[data-cursor="Play"], [data-cursor="再生"]').forEach(el => { el.dataset.cursor = UI[lang].cursorPlay; });
    const rail = $('[data-rail]'); if (rail) rail.dataset.cursor = UI[lang].cursorDrag;
    buildChips();
    placePill();
    refreshBox();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
    // as palavras do scrub mudaram: reaplica o progresso atual
    scrubSync.forEach(fn => fn());
  };

  const pill = $('.lang__pill');
  const placePill = () => {
    const b = $(`[data-lang="${lang}"]`);
    if (!b || !pill) return;
    pill.style.setProperty('--pw', b.offsetWidth + 'px');
    pill.style.setProperty('--px', b.offsetLeft + 'px');
  };

  /* ================= chips do drop ================= */
  const form = $('[data-form]');
  const picked = { uni: new Set(['sneakers']), fmt: new Set(['reels']) };
  function buildChips() {
    ['uni', 'fmt'].forEach(group => {
      const box = $(`[data-chips="${group}"]`);
      box.innerHTML = '';
      UI[lang][group].forEach(([val, label, sub]) => {
        const l = document.createElement('label');
        l.innerHTML = `<input type="checkbox" name="${group}" value="${val}"${picked[group].has(val) ? ' checked' : ''}><span>${label}${sub ? ` <i>${sub}</i>` : ''}</span>`;
        box.append(l);
      });
    });
  }
  const labelOf = (group, val) => (UI[lang][group].find(x => x[0] === val) || [, val])[1];

  /* ================= etiqueta viva ================= */
  const boxEl = $('.box'), boxNo = $('[data-box-no]'), boxStamp = $('[data-box-stamp]'), boxBar = $('[data-box-bar]');
  const miniEl = $('[data-minibox]'), miniNo = $('[data-mini-no]'), miniMarca = $('[data-mini="marca"]'), miniSubEl = $('[data-mini="sub"]'), miniStamp = $('[data-mini-stamp]');
  const barcode = (el, seed) => {
    let h = 0;
    for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    el.innerHTML = '';
    for (let k = 0; k < 34; k++) {
      h = (h * 1103515245 + 12345) >>> 0;
      const i = document.createElement('i');
      i.style.width = (1 + (h >> 7) % 3) + 'px';
      i.style.marginRight = (1 + (h >> 11) % 3) + 'px';
      el.append(i);
    }
  };
  $$('[data-barcode]').forEach(el => barcode(el, el.dataset.barcode));
  const prev = {};
  function refreshBox() {
    if (!form) return;
    const f = new FormData(form);
    const vals = {
      marca: (f.get('marca') || '').trim(),
      uni: f.getAll('uni').map(v => labelOf('uni', v)).join(' · '),
      fmt: f.getAll('fmt').map(v => labelOf('fmt', v)).join(' · '),
      quando: (f.get('quando') || '').trim()
    };
    Object.entries(vals).forEach(([k, v]) => {
      const dd = $(`[data-box="${k}"]`);
      const nv = v || '—';
      if (dd.textContent !== nv) {
        dd.textContent = nv;
        if (prev[k] !== undefined) { dd.classList.remove('is-flash'); void dd.offsetWidth; dd.classList.add('is-flash'); }
        prev[k] = nv;
      }
    });
    let h = 0; for (const c of vals.marca + vals.uni + vals.fmt) h = (h * 17 + c.charCodeAt(0)) % 997;
    boxNo.textContent = String(h).padStart(3, '0');
    barcode(boxBar, 'KVREM' + vals.marca + vals.fmt);
    const ready = vals.marca && (f.get('nome') || '').trim() && vals.uni && vals.fmt;
    boxStamp.classList.toggle('is-on', !!ready);
    // etiqueta compacta do celular espelha a grande
    const miniSub = [vals.uni, vals.fmt, vals.quando].filter(Boolean).join(' · ') || '—';
    const changed = miniMarca.textContent !== (vals.marca || '—') || miniSubEl.textContent !== miniSub;
    miniNo.textContent = boxNo.textContent;
    miniMarca.textContent = vals.marca || '—';
    miniSubEl.textContent = miniSub;
    miniStamp.classList.toggle('is-on', !!ready);
    if (changed && miniEl.classList.contains('is-on')) { miniEl.classList.remove('is-bump'); void miniEl.offsetWidth; miniEl.classList.add('is-bump'); }
  }
  if (form) {
    form.addEventListener('input', refreshBox);
    form.addEventListener('change', e => {
      if (e.target.name === 'uni' || e.target.name === 'fmt') {
        picked[e.target.name] = new Set(new FormData(form).getAll(e.target.name));
        boxEl.classList.remove('is-bump'); void boxEl.offsetWidth; boxEl.classList.add('is-bump');
      }
      refreshBox();
    });
  }

  /* ================= proposta -> e-mail ================= */
  const err = $('[data-err]');
  const compose = () => {
    const f = new FormData(form);
    const ja = lang === 'ja';
    const marca = (f.get('marca') || '').trim(), nome = (f.get('nome') || '').trim();
    const uni = f.getAll('uni').map(v => labelOf('uni', v)), fmt = f.getAll('fmt').map(v => labelOf('fmt', v));
    const quando = (f.get('quando') || '').trim(), msg = (f.get('msg') || '').trim();
    const verbaSel = form.verba.selectedOptions[0];
    const verba = form.verba.value ? verbaSel.textContent.trim() : '';
    const subject = ja ? `【コラボのご提案】${marca} × Karem Keiko` : `Proposta de collab | ${marca} x Karem Keiko`;
    const body = (ja ? [
      'Karem さん、はじめまして。',
      `${marca} の ${nome} と申します。`,
      'コラボのご相談でご連絡しました。',
      '',
      uni.length ? `世界観：${uni.join('、')}` : null,
      fmt.length ? `フォーマット：${fmt.join('、')}` : null,
      quando ? `時期：${quando}` : null,
      verba ? `予算：${verba}` : null,
      msg ? `\n${msg}` : null,
      '',
      'ご検討よろしくお願いいたします。'
    ] : [
      'Oi, Karem!',
      `Aqui é ${nome}, da ${marca}.`,
      'Queremos fazer um drop com você.',
      '',
      uni.length ? `Universo: ${uni.join(', ')}` : null,
      fmt.length ? `Formato: ${fmt.join(', ')}` : null,
      quando ? `Quando: ${quando}` : null,
      verba ? `Verba: ${verba}` : null,
      msg ? `\n${msg}` : null,
      '',
      'Bora conversar?'
    ]).filter(x => x !== null).join('\n').replace(/\n{3,}/g, '\n\n');
    return { subject, body, marca, nome };
  };
  const validate = () => {
    const f = new FormData(form);
    const checks = [['marca', UI[lang].errBrand], ['nome', UI[lang].errName]];
    for (const [k, m] of checks) {
      const field = form[k].closest('.field');
      if (!(f.get(k) || '').trim()) {
        field.classList.add('is-bad'); err.textContent = m; form[k].focus();
        form.classList.remove('is-pulse'); void form.offsetWidth; form.classList.add('is-pulse');
        return false;
      }
      field.classList.remove('is-bad');
    }
    err.textContent = '';
    return true;
  };
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate()) return;
      const { subject, body } = compose();
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
    $('[data-gmail]').addEventListener('click', e => {
      if (!validate()) { e.preventDefault(); return; }
      const { subject, body } = compose();
      e.currentTarget.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
    ['marca', 'nome'].forEach(k => form[k].addEventListener('input', () => { form[k].closest('.field').classList.remove('is-bad'); err.textContent = ''; }));
  }

  /* ================= etiqueta compacta: quando aparecer ================= */
  const narrow = matchMedia('(max-width: 860px)');
  const seen = { form: false, box: false, actions: false };
  let typing = false;
  const syncMini = () => miniEl.classList.toggle('is-on', narrow.matches && seen.form && !seen.box && !seen.actions && !typing);
  const mio = new IntersectionObserver(es => es.forEach(e => { seen[e.target.dataset.mio] = e.isIntersecting; syncMini(); }));
  [[form, 'form'], [$('.box'), 'box'], [$('.form__actions'), 'actions']].forEach(([el, k]) => { el.dataset.mio = k; mio.observe(el); });
  // com o teclado aberto ela sairia por cima do campo: some enquanto digita
  form.addEventListener('focusin', e => { if (e.target.matches('input:not([type=checkbox]), textarea, select')) { typing = true; syncMini(); } });
  form.addEventListener('focusout', () => { typing = false; setTimeout(syncMini, 50); });
  narrow.addEventListener('change', syncMini);
  miniEl.addEventListener('click', () => scrollToEl($('.boxwrap')));

  // copiar e-mail
  $$('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    const msg = $('[data-copy-msg]', b);
    try { await navigator.clipboard.writeText(b.dataset.copy); msg.textContent = UI[lang].copied; }
    catch (e) { location.href = 'mailto:' + b.dataset.copy; }
    setTimeout(() => { msg.textContent = UI[lang].copy; }, 2200);
  }));

  $('[data-year]').textContent = new Date().getFullYear();

  /* ================= primeira aplicação do idioma ================= */
  const scrubSync = [];
  applyLang();
  // depois da primeira passada, a etiqueta pode piscar ao mudar
  refreshBox();

  /* ================= revelar por interseção ================= */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -12% 0px' });
  $$('[data-words], [data-clip]').forEach(el => io.observe(el));

  const vio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && !reduce) e.target.play().catch(() => {}); else e.target.pause();
  }), { threshold: .1 });
  $$('video').forEach(v => { if (!v.closest('[data-reel]')) vio.observe(v); });

  /* ================= hero: três canais de vídeo que cortam entre clipes ================= */
  const reels = $$('[data-reel]');
  let heroVisible = true;
  const playReels = () => reels.forEach(r => {
    const on = $('video.is-on', r);
    if (heroVisible && !reduce && r.offsetParent !== null) on.play().catch(() => {}); else on.pause();
  });
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; playReels(); }).observe($('[data-hero]'));
  const cutReel = r => {
    const vs = $$('video', r), cur = vs.findIndex(v => v.classList.contains('is-on'));
    const next = vs[(cur + 1) % vs.length];
    vs[cur].classList.remove('is-on'); vs[cur].pause();
    next.currentTime = 0; next.classList.add('is-on');
    r.classList.remove('is-cut'); void r.offsetWidth; r.classList.add('is-cut');
    if (heroVisible) next.play().catch(() => {});
  };
  if (!reduce) {
    // cada canal corta num tempo diferente, pra parede nunca trocar inteira de uma vez
    reels.forEach((r, i) => setTimeout(() => setInterval(() => { if (heroVisible) cutReel(r); }, 5200), 1400 + i * 1700));
  }
  // se o navegador pausar o canal ativo sozinho (economia de energia), retoma
  reels.forEach(r => $$('video', r).forEach(v => v.addEventListener('pause', () => {
    if (v.classList.contains('is-on') && heroVisible && !reduce && r.offsetParent !== null) setTimeout(() => { if (v.paused && v.classList.contains('is-on')) v.play().catch(() => {}); }, 250);
  })));
  addEventListener('resize', playReels);
  playReels();

  /* ================= nav ================= */
  const nav = $('.nav'), float = $('.float');
  addEventListener('resize', placePill);
  if (document.fonts) document.fonts.ready.then(placePill);

  let lenis = null;
  if (motion && window.Lenis) { lenis = new Lenis({ lerp: .09, smoothWheel: true }); lenis.stop(); }
  const scrollToEl = t => {
    if (t == null) return;
    if (lenis) lenis.scrollTo(t, { duration: 1.6 });
    else (t === 0 ? scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }) : t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
  };
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const t = id === '#top' ? 0 : $(id);
    if (t == null) return;
    e.preventDefault(); scrollToEl(t);
  }));

  /* ================= troca de idioma com cortina ================= */
  const swapEl = $('.swap'), swapTxt = $('[data-swap-txt]');
  $$('[data-lang]').forEach(b => b.addEventListener('click', () => {
    const next = b.dataset.lang;
    if (next === lang) return;
    store.set('kk-lang', next);
    if (!motion) { lang = next; applyLang(); return; }
    swapTxt.textContent = UI[next].swap;
    gsap.timeline()
      .set(swapEl, { clipPath: 'inset(100% 0 0 0)' })
      .to(swapEl, { clipPath: 'inset(0% 0 0 0)', duration: .55, ease: 'expo.inOut' })
      .from(swapTxt, { yPercent: 60, opacity: 0, duration: .4, ease: 'power3.out' }, '-=.2')
      .add(() => { lang = next; applyLang(); })
      .to(swapEl, { clipPath: 'inset(0 0 100% 0)', duration: .6, ease: 'expo.inOut', delay: .15 });
  }));

  /* ================= cursor + magnético ================= */
  if (fine && !reduce) {
    document.documentElement.classList.add('has-cursor');
    const cur = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('[data-cursor-label]');
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('pointermove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      const lab = e.target.closest('[data-cursor]');
      cur.classList.toggle('is-label', !!lab);
      if (lab) label.textContent = lab.dataset.cursor;
      cur.classList.toggle('is-hover', !lab && !!e.target.closest('a, button, label, input, select, textarea'));
    });
    const loop = () => { rx += (mx - rx) * .2; ry += (my - ry) * .2; ring.style.transform = `translate(${rx}px, ${ry}px)`; requestAnimationFrame(loop); };
    loop();
    $$('[data-magnetic]').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .2}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transition = 'transform .6s cubic-bezier(.2,.7,.1,1)'; el.style.transform = ''; setTimeout(() => el.style.transition = '', 600); });
    });
  }

  /* ================= trilho do feed: infinito + arrastar ================= */
  const rail = $('[data-rail]'), track = $('[data-rail-track]');
  // duplica pelo HTML (e não com cloneNode) pra manter o loading="lazy" das imagens
  const nOrig = track.children.length;
  track.insertAdjacentHTML('beforeend', track.innerHTML);
  [...track.children].slice(nOrig).forEach(c => { c.setAttribute('aria-hidden', 'true'); c.tabIndex = -1; });
  const posts = $$('.post', track);
  let tx = 0, vel = 0, dragging = false, lastX = 0, moved = 0, half = 0, railOn = false, scrollVel = 0;
  const measure = () => { half = track.scrollWidth / 2; };
  measure(); addEventListener('resize', measure); addEventListener('load', measure);
  new IntersectionObserver(([e]) => { railOn = e.isIntersecting; }).observe(rail);
  rail.addEventListener('pointerdown', e => { dragging = true; moved = 0; lastX = e.clientX; rail.classList.add('is-drag'); rail.setPointerCapture(e.pointerId); });
  rail.addEventListener('pointermove', e => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx); tx += dx; vel = dx; });
  const endDrag = () => { dragging = false; rail.classList.remove('is-drag'); };
  rail.addEventListener('pointerup', endDrag); rail.addEventListener('pointercancel', endDrag);
  rail.addEventListener('click', e => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } }, true);
  rail.addEventListener('dragstart', e => e.preventDefault());
  const railLoop = () => {
    if (railOn) {
      if (!dragging) { vel *= .92; tx += vel - (reduce ? 0 : .7) - scrollVel * .4; }
      if (half) { while (tx <= -half) tx += half; while (tx > 0) tx -= half; }
      track.style.transform = `translate3d(${tx}px,0,0)`;
      const sk = clamp((dragging ? vel : vel + scrollVel) * -.25, -10, 10);
      posts.forEach(p => p.style.setProperty('--skew', sk.toFixed(2) + 'deg'));
    }
    requestAnimationFrame(railLoop);
  };
  railLoop();

  /* ================= faixa vermelha ================= */
  const tape = $('[data-tape]');
  tape.innerHTML += tape.innerHTML;
  let tk = 0;
  const tapeLoop = () => {
    tk -= (reduce ? 0 : .8) + Math.abs(scrollVel) * .6;
    const w = tape.scrollWidth / 2;
    if (w && tk <= -w) tk += w;
    tape.style.transform = `translate3d(${tk}px,0,0) rotate(-2.4deg)`;
    requestAnimationFrame(tapeLoop);
  };
  tapeLoop();

  /* ================= barra, nav, flutuante ================= */
  const bar = $('[data-progress]');
  let anchorY = 0, hidden = false, heroEnd = innerHeight;
  const dropEl = $('#drop');
  const onScroll = y => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    const past = y > heroEnd - 90;
    nav.classList.toggle('is-solid', past);
    // esconde depois de descer 40px, volta depois de subir 24px (a desaceleração não conta)
    if (!past) { hidden = false; anchorY = y; }
    else if (hidden ? y > anchorY : y < anchorY) anchorY = y;
    else if (!hidden && y - anchorY > 40) { hidden = true; anchorY = y; }
    else if (hidden && anchorY - y > 24) { hidden = false; anchorY = y; }
    nav.classList.toggle('is-hidden', hidden);
    // o botão flutuante segue a nav: some ao descer, pra nunca ficar em cima do texto
    const r = dropEl.getBoundingClientRect();
    float.classList.toggle('is-on', past && !hidden && !(r.top < innerHeight && r.bottom > 0));
  };

  /* ================= sem GSAP / movimento reduzido ================= */
  if (!motion) {
    $('.loader').remove();
    document.body.classList.remove('is-loading');
    $('.hero').classList.add('is-in');
    $$('[data-split]').forEach(el => el.classList.add('is-in'));
    $$('[data-scrub] .w').forEach(w => w.classList.add('on'));
    const clip = $('[data-orb]'); if (clip) clip.style.opacity = 1;
    addEventListener('scroll', () => onScroll(scrollY), { passive: true });
    onScroll(scrollY);
    return;
  }

  /* ================= GSAP ================= */
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) {
    lenis.on('scroll', e => { ScrollTrigger.update(); scrollVel = clamp(e.velocity || 0, -60, 60); onScroll(e.scroll); });
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  } else addEventListener('scroll', () => onScroll(scrollY), { passive: true });
  gsap.ticker.add(() => { scrollVel *= .9; });
  const mm = gsap.matchMedia();

  /* ---------- HERO ---------- */
  const hero = $('[data-hero]'), word = $('[data-hero-word]'), wordIn = $('.hero__word-in');
  const stage = $('.hero__stage');
  gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: () => '+=' + innerHeight, scrub: true, onRefresh: () => { heroEnd = hero.offsetHeight - innerHeight; } } })
    .to(wordIn, { xPercent: -30, ease: 'none', duration: 1 }, 0)
    .to(reels[0], { yPercent: -6, ease: 'none', duration: 1 }, 0)
    .to(reels[1], { yPercent: 5, ease: 'none', duration: 1 }, 0)
    .to(reels[2], { yPercent: -9, ease: 'none', duration: 1 }, 0)
    .to('.hero__tate', { yPercent: -40, ease: 'none', duration: 1 }, 0)
    .to('[data-stamp]', { y: -160, ease: 'none', duration: 1 }, 0)
    .fromTo('[data-hero-tag]', { y: 0, opacity: 1 }, { y: -90, opacity: 0, ease: 'power1.in', duration: .55, immediateRender: false }, 0)
    .fromTo('[data-hero-side], .hero__hint', { y: 0, opacity: 1 }, { y: -60, opacity: 0, ease: 'power1.in', duration: .45, immediateRender: false }, 0);
  gsap.fromTo(stage, { scale: 1, rotate: 0, filter: 'brightness(1)' }, { scale: .92, rotate: -1.5, filter: 'brightness(.35)', ease: 'none',
    scrollTrigger: { trigger: '[data-manifesto]', start: 'top bottom', end: 'top top', scrub: true } });

  if (fine) {
    const qwx = gsap.quickTo(word, 'x', { duration: 1.6, ease: 'power3' });
    const qwy = gsap.quickTo(word, 'y', { duration: 1.6, ease: 'power3' });
    hero.addEventListener('pointermove', e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      qwx(x * -70); qwy(y * -26);
    });
  }

  /* ---------- MANIFESTO ---------- */
  const light = (el, p) => { const ws = $$('.w', el); const lit = Math.round(p * ws.length); ws.forEach((w, k) => w.classList.toggle('on', k < lit)); };
  const manText = $('.manifesto [data-scrub]');
  const clip = $('[data-orb]');
  mm.add('(min-width: 861px)', () => {
    gsap.fromTo(clip, { scale: .6, opacity: 0, rotate: -10, yPercent: -50 }, { scale: 1, opacity: 1, rotate: 4, yPercent: -50, ease: 'none',
      scrollTrigger: { trigger: '[data-manifesto]', start: 'top 60%', end: 'top top', scrub: true } });
    gsap.to(clip, { yPercent: -62, rotate: -3, ease: 'none', scrollTrigger: { trigger: '[data-manifesto]', start: 'top top', end: 'bottom bottom', scrub: true } });
  });
  mm.add('(max-width: 860px)', () => {
    gsap.fromTo(clip, { scale: .6, opacity: 0 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: '[data-manifesto]', start: 'top 60%', end: 'top top', scrub: true } });
  });
  const manST = ScrollTrigger.create({ trigger: '[data-manifesto]', start: 'top top', end: 'bottom bottom', scrub: true, onUpdate: s => light(manText, clamp(s.progress * 1.15, 0, 1)) });
  scrubSync.push(() => light(manText, clamp(manST.progress * 1.15, 0, 1)));

  /* ---------- JOBS (horizontal) ---------- */
  const jobs = $('[data-jobs]'), jtrack = $('[data-track]'), jbar = $('[data-jobs-bar]');
  const dist = () => Math.max(0, jtrack.scrollWidth - innerWidth);
  const hTween = gsap.to(jtrack, { x: () => -dist(), ease: 'none',
    scrollTrigger: { trigger: jobs, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true,
      onUpdate: s => { jbar.style.transform = `scaleX(${s.progress})`; } } });
  $$('[data-par]').forEach(v => {
    gsap.fromTo(v, { xPercent: -5 }, { xPercent: 5, ease: 'none',
      scrollTrigger: { trigger: v.closest('.panel'), containerAnimation: hTween, start: 'left right', end: 'right left', scrub: true } });
  });
  $$('.panel--card, .panel--media').forEach((p, i) => {
    gsap.from(p, { y: 80, opacity: 0, rotate: i % 2 ? -3 : 3, ease: 'power2.out',
      scrollTrigger: { trigger: p, containerAnimation: hTween, start: 'left 98%', end: 'left 62%', scrub: true } });
  });

  /* ---------- UNIVERSOS: cartas empilhadas ---------- */
  const scards = $$('[data-scard]');
  scards.forEach((c, i) => {
    const next = scards[i + 1];
    if (next) gsap.fromTo(c, { scale: 1, rotate: 0, filter: 'brightness(1)' }, { scale: .9, rotate: i % 2 ? 1.5 : -1.5, filter: 'brightness(.55)', ease: 'none',
      scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 10%', scrub: true } });
    const imgs = $$('.scard__collage > *', c);
    gsap.from(imgs, { y: 120, rotate: (k) => [-14, 12, -8][k], opacity: 0, stagger: .12, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 72%' } });
    gsap.from($$('.scard__copy > *', c), { y: 50, opacity: 0, stagger: .07, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 72%' } });
  });

  /* ---------- SOBRE ---------- */
  gsap.fromTo('[data-tilt]', { y: 70 }, { y: -70, ease: 'none', scrollTrigger: { trigger: '[data-portrait]', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.fromTo('.about__pol', { yPercent: 30 }, { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '[data-portrait]', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.to('.about__sticker', { rotate: 346, ease: 'none', scrollTrigger: { trigger: '[data-portrait]', start: 'top bottom', end: 'bottom top', scrub: true } });
  if (fine) {
    const tilt = $('[data-tilt]'), por = $('[data-portrait]');
    const qrx = gsap.quickTo(tilt, 'rotationX', { duration: .9, ease: 'power3' });
    const qry = gsap.quickTo(tilt, 'rotationY', { duration: .9, ease: 'power3' });
    por.addEventListener('pointermove', e => {
      const r = por.getBoundingClientRect();
      qry(((e.clientX - r.left) / r.width - .5) * 16); qrx(((e.clientY - r.top) / r.height - .5) * -12);
    });
    por.addEventListener('pointerleave', () => { qrx(0); qry(0); });
  }

  /* ---------- CITAÇÃO ---------- */
  const qText = $('.quote [data-scrub]');
  const qST = ScrollTrigger.create({ trigger: '[data-quote]', start: 'top 70%', end: 'bottom 70%', scrub: true, onUpdate: s => light(qText, s.progress) });
  scrubSync.push(() => light(qText, qST.progress));

  /* ---------- DROP: etiqueta entra girando ---------- */
  gsap.from('.box', { y: 120, rotate: 14, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.drop__grid', start: 'top 75%' } });

  /* ---------- RODAPÉ ---------- */
  gsap.from('.foot__big span:first-child', { xPercent: -30, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } });
  gsap.from('.foot__big span:last-child', { xPercent: 30, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } });

  /* ================= ABERTURA ================= */
  const count = $('[data-count]'), loadBar = $('[data-load-bar]');
  const ready = Promise.all([
    new Promise(r => { const v = $('[data-reel] video.is-on'); if (v.readyState >= 2) r(); else { v.addEventListener('loadeddata', r, { once: true }); v.addEventListener('error', r, { once: true }); } }),
    document.fonts ? document.fonts.ready : Promise.resolve()
  ]);
  const cap = new Promise(r => setTimeout(r, 4000));
  const counter = { v: 0 };
  const paint = () => { count.textContent = Math.round(counter.v); loadBar.style.transform = `scaleX(${counter.v / 100})`; };
  const intro = gsap.timeline({ paused: true });
  intro
    .to('.loader__label', { y: -40, rotate: 6, opacity: 0, duration: .5, ease: 'power2.in' })
    .to('.loader__jp', { opacity: 0, duration: .3 }, '<')
    .to('.loader__panel', { yPercent: -112, duration: 1.1, ease: 'expo.inOut' }, '-=.1')
    .from(reels, { yPercent: 30, opacity: 0, stagger: .12, duration: 1.5, ease: 'expo.out' }, '-=.6')
    .from(wordIn, { yPercent: 80, opacity: 0, duration: 1.4, ease: 'expo.out' }, '<.05')
    .add(() => {
      hero.classList.add('is-in'); $('[data-split]').classList.add('is-in');
      document.body.classList.remove('is-loading');
      $('.loader').style.display = 'none';
      if (lenis) lenis.start();
      ScrollTrigger.refresh();
    }, '<.2');

  gsap.from('.loader__label', { y: 40, rotate: -10, opacity: 0, duration: .7, ease: 'back.out(1.6)' });
  const countTween = gsap.to(counter, { v: 88, duration: 1.4, ease: 'power2.out', onUpdate: paint });
  Promise.race([Promise.all([ready, new Promise(r => setTimeout(r, 1400))]), cap]).then(() => {
    countTween.kill();
    gsap.to(counter, { v: 100, duration: .3, ease: 'power1.out', onUpdate: paint, onComplete: () => intro.play() });
  });

  addEventListener('load', () => ScrollTrigger.refresh());
})();
