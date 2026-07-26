---
title: "セキュリティニュース 2026-07-23"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-07-23

**2026-07-23 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-23-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-23-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>570件の更新から家庭機器まで――「何を先に守るか」を決めるセキュリティニュース（2026年7月23日）</h1>
<h2>オープニング：2026年7月23日 — セキュリティニュース</h2>
<p><strong>キーワード:</strong> 更新管理 / WordPress / ブラウザー拡張 / Adobe / Langflow / 住宅用プロキシ</p>
<p>今日の六本に共通するのは、脆弱性の件数や製品名を知るだけでは守れないということだ。570件の修正があっても、自分の環境で外部公開され、強い権限を持ち、実際に悪用されているものから順に対応しなければならない。</p>
<p>対象は企業のサーバーだけではない。WordPressサイト、ブラウザーの拡張機能、PDF閲覧ソフト、AI基盤、家庭のルーターやテレビ端末まで、日常的に使うものが攻撃面になる。更新前の確認、更新後の版とログ、不要な権限や遠隔管理の見直しまでを一つの流れとして考える。</p>
<h2>マイクロソフト570件の修正</h2>
<ul>
<li>Krebs on Securityは2026年7月、マイクロソフトが570件のセキュリティ問題を修正したと報じた。JPCERT/CCとIPAも7月の更新プログラムについて注意喚起している。</li>
<li>570という件数は優先順位そのものではない。外部から到達できるか、管理権限に影響するか、悪用が確認されているか、業務への影響が大きいかを重ねて判断する必要がある。</li>
<li>更新プログラムを配布しても、端末が再起動されず、修正版へ変わっていなければ完了ではない。更新後の版とログまで確認すると、未適用端末と侵害の兆候を探しやすい。</li>
<li>次に見るべきなのは、自組織の資産一覧と7月更新の対応関係である。件数に圧倒されるより、外部公開資産から順に対象版、再起動、ログを記録したい。</li>
</ul>
<h2>ワードプレスの二つの脆弱性</h2>
<ul>
<li>IPAは7月22日、CVE-2026-60137とCVE-2026-63030について注意喚起した。後者は「WP2Shell」という通称でも示されている。</li>
<li>公開サイトの攻撃面はWordPress本体だけではない。テーマ、拡張機能、管理者権限が組み合わさるため、使っていない構成や強すぎる権限も確認対象になる。</li>
<li>対象版や悪用の有無は、注意喚起の公式情報と自分の環境を照合して判断する。脆弱性番号が存在することと、自分のサイトが影響を受けることは同じではない。</li>
<li>更新前のバックアップ、更新後の表示・機能確認、ログの点検までを一組にしたい。次の焦点は、二つの番号ごとの対象版と修正版、導入中のテーマや拡張機能である。</li>
</ul>
<h2>ブラウザー拡張機能と会話データ</h2>
<ul>
<li>The Hacker NewsとBleeping Computerの2026年7月記事は、Adobeのブラウザー拡張機能からWhatsAppのウェブ会話データへアクセスできる問題を扱った。</li>
<li>拡張機能は閲覧中のページに広い権限を持つ場合がある。会話データには利用者本人だけでなく、連絡先の情報も含まれるため、自分だけの問題では終わらない。</li>
<li>この問題は、Adobe AcrobatやReader本体の脆弱性とは別である。同じブランド名でも、ブラウザー拡張機能と本体製品では対象版、権限、更新先が異なる。</li>
<li>まず対象の拡張機能が導入されているか、必要以上の権限がないか、更新済みかを確認したい。使っていない拡張機能を残さないことも、確認対象を減らす助けになる。</li>
</ul>
<h2>アクロバットとリーダー本体の注意喚起</h2>
<ul>
<li>JPCERT/CCは「Adobe AcrobatおよびReaderの脆弱性（APSB26-63）」を注意喚起している。こちらは本体製品の問題で、前節のブラウザー拡張機能とは分けて扱う必要がある。</li>
<li>同じAdobe製品でも、本体を更新しただけで拡張機能の問題が解消したとは限らず、逆も同じである。製品名ではなく、機能、版、権限、更新先で区別したい。</li>
<li>影響する版、修正版、悪用の有無は公式情報で確認する。注意喚起があることと、個々の端末がすでに侵害されたことは同じではない。</li>
<li>組織では配布指示だけでなく、端末ごとの版と更新結果を集計する必要がある。次に見るべきなのは、APSB26-63の対象製品と、自分の端末に残る未更新版である。</li>
</ul>
<h2>ラングフローの悪用確認された欠陥</h2>
<ul>
<li>Bleeping Computerは2026年7月、米国のサイバー当局が、実際に悪用されているLangflowの遠隔コード実行脆弱性へ緊急対応を求めたと報じた。</li>
<li>7月22日に扱われたAIへの指示注入とは異なり、今回はAI基盤を運用するサーバーそのものが焦点になる。新しいAI製品でも、公開状態、版、権限、ログという基本は変わらない。</li>
<li>実際の悪用が確認されているため、対象環境では更新だけでなく、外部公開の停止、証跡保全、侵害調査、秘密情報の更新を環境に応じて検討する必要がある。</li>
<li>次に確認したいのは、どの環境が外部から到達できるか、対象版が残っているか、更新前後のログに異常がないかである。</li>
</ul>
<h2>ネットナット差し押さえと家庭機器</h2>
<ul>
<li>Krebs on Securityは2026年7月、FBIがNetNutのプロキシ基盤とPopaボットネットを差し押さえたと報じた。</li>
<li>住宅用プロキシは家庭の回線やテレビ用端末を通信の中継に使う問題と結び付く。ボットネットは、所有者の同意なく端末を攻撃者の部品として利用する。</li>
<li>基盤が差し押さえられても、個々の端末が安全になったとは限らない。家庭側には機器の更新、初期パスワードの変更、不要な遠隔管理の停止が残る。</li>
<li>資産一覧にはパソコンだけでなく、ルーター、監視カメラ、テレビ端末も含めたい。次に見るべきなのは、差し押さえ後の効果と、自宅機器の更新・設定状況である。</li>
</ul>
<h2>今日のまとめ</h2>
<p>今日は、更新の優先順位を「件数」から「条件」へ移す話だった。マイクロソフトでは外部公開・権限・悪用・業務影響、WordPressでは本体・テーマ・拡張機能・管理者権限、Adobeでは拡張機能と本体の分離、Langflowでは証跡保全、NetNutでは家庭機器まで視野を広げた。</p>
<p>最初の行動は難しくない。使っている機器とソフトを一覧にし、対象版かを確かめ、更新後の版とログを見る。家庭では初期パスワードと遠隔管理も確認する。製品名に驚くより、「自分のどの機器に、どの条件が当てはまるか」を一つずつ潰す方が、具体的な防御になる。</p>
<h2>参考ソース</h2>
<ul>
<li><a href="https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/">Krebs on Security: Microsoft Patches a Record 570 Security Flaws</a></li>
<li><a href="https://www.jpcert.or.jp/at/2026/at260020.html">JPCERT/CC: 2026年7月Microsoftセキュリティ更新プログラムに関する注意喚起</a></li>
<li><a href="https://www.ipa.go.jp/security/security-alert/2026/alert20260722.html">IPA: WordPressの脆弱性に関する注意喚起, 2026-07-22</a></li>
<li><a href="https://thehackernews.com/2026/07/adobe-acrobat-extension-flaw-let.html">The Hacker News: Adobe Acrobat Extension Flaw</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/adobe-chrome-extension-flaw-let-sites-access-private-whatsapp-chats/">Bleeping Computer: Adobe Chrome extension flaw exposed private WhatsApp chats</a></li>
<li><a href="https://www.jpcert.or.jp/at/2026/at260018.html">JPCERT/CC: Adobe AcrobatおよびReaderの脆弱性（APSB26-63）</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/cisa-orders-urgent-action-on-actively-exploited-langflow-rce-flaw/">Bleeping Computer: CISA orders urgent action on actively exploited Langflow RCE flaw</a></li>
<li><a href="https://krebsonsecurity.com/2026/07/fbi-seizes-netnut-proxy-platform-popa-botnet/">Krebs on Security: FBI Seizes NetNut Proxy Platform, Popa Botnet</a></li>
</ul>

</details>

---

[← 2026-07-23 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
