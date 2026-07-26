---
title: "ShareFileゼロデイとSAP更新、悪性Edge拡張機能まで【セキュリティニュース 2026/07/15】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# ShareFileゼロデイとSAP更新、悪性Edge拡張機能まで【セキュリティニュース 2026/07/15】

**2026-07-15 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-15-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-15-security)

---

## 概要

更新を急ぐShareFileのゼロデイ、SAPの月例更新、公開機器とブラウザー拡張機能の見直しを解説します。

▼ 今日のトピック
・ShareFileの緊急停止と修正
・SAPの7月更新
・ロシア系とされる侵入手口
・感染端末を使うプロキシ網
・悪性Edge拡張機能

▼ 参考記事・ソース
・BleepingComputer https://www.bleepingcomputer.com/news/security/
・NCSC警告 https://www.itpro.com/security/ncsc-issues-warning-over-russian-intelligence-backed-threat-group

#セキュリティ #サイバー攻撃 #脆弱性 #ゼロデイ #情報セキュリティ #ずんだもん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月15日）</h1>
<p><strong>キーワード:</strong> ShareFile / ゼロデイ / SAP / VPN / ロシア系攻撃 / 拡張機能</p>
<h2>オープニング</h2>
<ul>
<li>緊急停止に至ったファイル共有製品、月例更新、国家支援が疑われる侵入、感染端末を使うプロキシ網、ブラウザー拡張機能を取り上げる。</li>
</ul>
<h2>ShareFileのゼロデイと緊急停止</h2>
<ul>
<li>Progress Softwareは、ShareFile Storage Zone Controllerの緊急停止の原因が深刻度の高いゼロデイ脆弱性だったと確認し、修正を公開した。ゼロデイは修正前から悪用される可能性がある欠陥で、更新の遅れが直接のリスクになる。</li>
<li>利用組織は該当コントローラーを特定し、提供元の案内に従って更新・侵害痕跡の確認を進めたい。外部公開のファイル共有基盤は、認証情報とアクセスログも併せて見直す必要がある。</li>
</ul>
<h2>SAPの7月更新と重要な3件</h2>
<ul>
<li>SAPは7月の更新で16件の脆弱性に対応し、NetWeaver、Commerce Cloud、AppRouterに関わる3件を重大と位置づけた。基幹業務ソフトは、止めにくいからこそ定期更新の計画が重要になる。</li>
<li>管理者は更新情報を確認し、影響する製品を棚卸しして、検証環境を経た適用順序を決めたい。脆弱性情報を読んだだけで終わらせず、適用済みかを記録することが防御になる。</li>
</ul>
<h2>ロシアFSB系とされる侵入手口への警告</h2>
<ul>
<li>英国NCSCは、18機関と共同で、ロシアFSBの支援を受けるとされる脅威グループの手口を警告した。Cisco機器、ウェブポータル、古いネットワーク機能の欠陥を足場にする例が挙げられている。</li>
<li>公開機器の資産台帳、不要な管理機能の停止、修正の迅速な適用が基本となる。国家支援が疑われる攻撃でも、最初の入口は未更新機器という場合がある。</li>
</ul>
<h2>NetNutプロキシ網から200万台を切断</h2>
<ul>
<li>BleepingComputerは、感染端末を経由させるNetNutプロキシ網が妨害され、約200万台が切り離されたと報じた。プロキシ網は、攻撃者が自分の接続元を隠して不正アクセスや詐欺を行うために使うことがある。</li>
<li>個人の端末が知らないうちに中継点にされれば、通信や評判に影響する。OS・アプリ更新、不要アプリの削除、ルーターを含む家庭機器の管理が重要だ。</li>
</ul>
<h2>Edge拡張機能に潜むマルウェア</h2>
<ul>
<li>The Hacker Newsは、Microsoftが画像やフォントに悪性コードを隠した119件のEdge拡張機能を削除したと伝えた。公式ストアにあることだけでは、安全の保証にならない。</li>
<li>拡張機能は閲覧ページや入力内容へ広い権限を求める場合がある。利用者は不要なものを消し、更新元、権限、利用者数だけでなく、実際に必要かを定期的に見直したい。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今日の共通点は、ファイル共有、基幹業務、ネットワーク機器、家庭の端末、ブラウザーまで、境界の外に置いた便利な仕組みが入口になることだ。</li>
<li>更新、資産の把握、不要機能と不要拡張機能の削除を、日常の運用として続けることが最も確実な対策になる。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://www.bleepingcomputer.com/news/security/">ShareFileゼロデイと更新（BleepingComputer）</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/">SAP 7月更新（BleepingComputer）</a></li>
<li><a href="https://www.itpro.com/security/ncsc-issues-warning-over-russian-intelligence-backed-threat-group">NCSCのロシア系脅威警告（ITPro）</a></li>
<li><a href="https://www.bleepingcomputer.com/news/security/netnut-proxy-network-disrupted-2-million-infected-devices-cut-off/">NetNutプロキシ網の妨害（BleepingComputer）</a></li>
<li><a href="https://thehackernews.com/2026/07/">悪性Edge拡張機能（The Hacker News）</a></li>
</ul>

</details>

---

[← 2026-07-15 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
