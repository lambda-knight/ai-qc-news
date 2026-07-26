---
title: "FortiBleed 8.6万台・テキサス300万件漏洩・CISA失態【サイバーセキュリティ 2026/06/21】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# FortiBleed 8.6万台・テキサス300万件漏洩・CISA失態【サイバーセキュリティ 2026/06/21】

**2026-06-21 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-21-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-21-security)

---

## 概要

今週のサイバーセキュリティニュースをずんだもんと四国めたんが解説します。

▼ 今日のトピック
・FortiBleed・Check Point・Palo Alto に重大脆弱性ラッシュ（86,644台影響）
・テキサス州政府データ漏洩：運転免許証300万件以上が流出
・CISA職員がAWS GovCloudの機密キーをGitHubに誤って公開
・北朝鮮ハッカーによる Mastra AI サプライチェーン攻撃
・6月パッチチューズデー（記録的修正件数）：Windows・Adobe 今すぐ更新を
・Meta の AI サポートボットを悪用した Instagram アカウント乗っ取り

▼ 今週やること（重要）
1. Windows Update と Adobe Acrobat のアップデートを今すぐ適用
2. SNS アカウントに2段階認証（2FA）を設定
3. 企業担当者: FortiGate・Check Point・Palo Alto のパッチを最優先適用

▼ 参考ソース
・Krebs on Security https://krebsonsecurity.com/
・Bleeping Computer https://www.bleepingcomputer.com/
・The Hacker News https://thehackernews.com/
・JPCERT/CC https://www.jpcert.or.jp/
・IPA https://www.ipa.go.jp/security/

#サイバーセキュリティ #セキュリティ #脆弱性 #ランサムウェア #情報漏洩 #ゆっくり解説 #ずんだもん #四国めたん #FortiGate #パッチチューズデー #北朝鮮 #不正アクセス

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>サイバーセキュリティニュース 2026年6月21日</h1>
<p>今週は記録的パッチチューズデー、エンタープライズVPN製品の大規模脆弱性、政府機関の失態など盛りだくさんです。</p>
<h2>エンタープライズVPN・ファイアウォールに脆弱性ラッシュ（FortiBleed・Check Point・Palo Alto）</h2>
<ul>
<li><strong>FortiBleed</strong>: Fortinetの FortiGate に深刻な情報漏洩脆弱性。世界86,644台のデバイスが影響を受けると判明（CISA警告）</li>
<li><strong>Check Point CVE-2026-50751</strong>: Check Point 製品に認証バイパスの脆弱性。JPCERT/CC・IPA が緊急注意喚起</li>
<li><strong>Palo Alto PAN-OS CVE-2026-0265</strong>: Palo Alto Networks のファイアウォール OS にも認証回避の脆弱性（JPCERT/CC 注意喚起）</li>
<li>3製品とも企業・官公庁のネットワーク境界を守る機器であり、悪用されると内部ネットワークへの侵入口になる</li>
<li>対策: 各社が修正パッチを公開済み。利用中の場合は直ちに適用が必要</li>
</ul>
<p>出典: The Hacker News (2026/06/14) / JPCERT/CC (2026/06/11) / IPA (2026/06/11) / CISA</p>
<h2>テキサス州政府データ漏洩：運転免許証300万件以上が流出</h2>
<ul>
<li>テキサス州政府システムへの不正アクセスにより、300万件超の運転免許証データが流出</li>
<li>流出した情報: 氏名・住所・運転免許証番号・生年月日等の個人情報</li>
<li>身元詐称・フィッシング詐欺・なりすまし犯罪に悪用されるリスク</li>
<li>テキサス州当局は調査中。対象者への通知を開始</li>
</ul>
<p>出典: Bleeping Computer (2026/06/19)</p>
<h2>CISA職員がAWS GovCloudの機密キーをGitHubに誤って公開</h2>
<ul>
<li>皮肉なことに、米国のサイバーセキュリティ機関「CISA」の職員が Amazon Web Services（AWS）GovCloud のアクセスキーを誤って GitHub に公開してしまった</li>
<li>GovCloud は米政府が機密データ処理に使うクラウド基盤</li>
<li>発覚後すぐにキーは無効化・削除されたとCISAは説明</li>
<li>CISAは現在、別件で議員から個人データ漏洩問題の説明を求められている最中でもあり、立て続けのセキュリティ問題に批判が集まっている</li>
</ul>
<p>出典: Krebs on Security (2026/06/16)</p>
<h2>北朝鮮ハッカーがMastra AIサプライチェーンを攻撃</h2>
<ul>
<li>Microsoft の分析により、Mastra（オープンソースのAIエージェントフレームワーク）のサプライチェーン攻撃が北朝鮮のハッカー集団によるものと判明</li>
<li>開発者がパッケージをインストールするだけでマルウェアが混入される「ソフトウェアサプライチェーン攻撃」</li>
<li>対象は主にAI・ソフトウェア開発者。感染後は暗号資産の窃取などが目的とみられる</li>
<li>北朝鮮は以前から開発者コミュニティを標的にした攻撃を繰り返している</li>
</ul>
<p>出典: Bleeping Computer (2026/06/18)</p>
<h2>6月パッチチューズデー：記録的な修正件数</h2>
<ul>
<li>Microsoftが2026年6月のセキュリティ更新を公開。修正件数が過去最多級の規模</li>
<li>Windows・Edge・Office 等の主要製品に複数の深刻な脆弱性（リモートコード実行含む）</li>
<li>IPA・JPCERT/CC も緊急で注意喚起を発出。一般ユーザーも Windows Update の適用が必要</li>
<li>Adobe Acrobat/Reader にも深刻な脆弱性（APSB26-63）。PDFを開くだけで感染するリスク</li>
</ul>
<p>出典: Krebs on Security (2026/06/10) / JPCERT/CC (2026/06/11) / IPA (2026/06/11)</p>
<h2>MetaのAIサポートボットを悪用してInstagramアカウントを乗っ取り</h2>
<ul>
<li>攻撃者がMetaの公式AIサポートチャットボットを騙すことで、他人のInstagramアカウントを乗っ取る手口が報告された</li>
<li>AIボットに特定の言葉を送ると、アカウント回復プロセスが不正に開始されてしまう欠陥</li>
<li>Meta は問題を修正済みと発表しているが、AIサポートシステムを悪用した攻撃の新たな手口として注目される</li>
<li>SNSアカウントの二段階認証（2FA）設定が被害を防ぐ最大の対策</li>
</ul>
<p>出典: Krebs on Security (2026/06/13)</p>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security https://krebsonsecurity.com/</li>
<li>Bleeping Computer https://www.bleepingcomputer.com/</li>
<li>The Hacker News https://thehackernews.com/</li>
<li>JPCERT/CC https://www.jpcert.or.jp/</li>
<li>IPA https://www.ipa.go.jp/security/</li>
</ul>

</details>

---

[← 2026-06-21 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
