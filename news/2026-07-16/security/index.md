---
title: "Microsoft 570件更新、悪用中SharePointとSonicWallを確認【セキュリティニュース 2026/07/16】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# Microsoft 570件更新、悪用中SharePointとSonicWallを確認【セキュリティニュース 2026/07/16】

**2026-07-16 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-16-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-16-security)

---

## 概要

2026年7月16日のセキュリティニュースです。
Microsoftの月例更新、悪用中のSharePointとSonicWall、npmパッケージ侵害、Zoomの脆弱性を、利用者と管理者の対策まで含めて解説します。更新、資産把握、公開範囲、認証情報の再発行をどう優先するかも整理します。

▼ 今日のトピック
・Microsoft、570件の脆弱性を修正
・悪用中のSharePoint Server脆弱性
・SonicWall SMA1000のゼロデイ悪用
・AsyncAPIのnpmパッケージ侵害
・Zoomのアカウント乗っ取り脆弱性

▼ 参考記事・ソース
・Krebs on Security「Microsoft Patches a Record 570 Security Flaws」
  https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/
・JPCERT/CC「2026年7月マイクロソフトセキュリティ更新プログラムに関する注意喚起」
  https://www.jpcert.or.jp/at/2026/at260020.html
・BleepingComputer「CISA warns admins to patch actively exploited SharePoint flaws」
  https://www.bleepingcomputer.com/news/security/cisa-warns-admins-to-patch-actively-exploited-sharepoint-flaws/
・BleepingComputer「SonicWall warns of SMA1000 flaws exploited in zero-day attacks, patch now」
  https://www.bleepingcomputer.com/news/security/sonicwall-warns-of-sma1000-flaws-exploited-in-zero-day-attacks-patch-now/
・BleepingComputer「AsyncAPI npm packages infected with credential-stealing malware」
  https://www.bleepingcomputer.com/news/security/-asyncapi-npm-packages-infected-with-credential-stealing-malware/

#セキュリティ #脆弱性 #SharePoint #SonicWall #サプライチェーン #ずんだもん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月16日）</h1>
<p><strong>キーワード:</strong> Microsoft / SharePoint / SonicWall / AsyncAPI / GitHub / Zoom</p>
<h2>Microsoftの7月更新：570件の脆弱性に対応</h2>
<ul>
<li>Microsoftは7月の月例更新で少なくとも570件の脆弱性を修正した。Krebs on Securityは、同社がAIを利用した脆弱性発見の増加を修正件数の背景として説明したと伝えている。</li>
<li>件数が多いからといって、すべてを同じ緊急度で処理する必要はない。組織は、インターネットに公開された機器、実際に使っている製品、悪用情報の有無を基に優先順位を決めたい。</li>
<li>JPCERT/CCとIPAも7月のMicrosoft製品の更新について注意喚起している。更新前の検証、適用後の再起動確認、適用状況の記録を運用に組み込みたい。</li>
<li>AIを使って欠陥を見つける技術が進んでも、更新を適用して危険な設定を直す作業は利用組織に残る。自動化を運用の代わりと考えないことが重要だ。</li>
</ul>
<h2>悪用中のSharePoint脆弱性：公開サーバーの早急な点検を</h2>
<ul>
<li>米CISAは、オンプレミスのMicrosoft SharePoint Serverを狙う三つの脆弱性が、すでに攻撃者に悪用されているとして管理者へ修正を促した。</li>
<li>SharePointは社内文書や共同作業に使われることが多い。外部から到達できるサーバーが対象なら、修正の適用だけでなく、管理者アカウント、ログ、不審なファイルや外部通信を確認する必要がある。</li>
<li>クラウド版とオンプレミス版では対処の責任範囲が異なる。自組織がどの構成を使っているか、まず資産台帳で確かめることが出発点になる。</li>
<li>緊急対応では、サービス停止の影響と侵害拡大の危険を比べる判断も必要になる。連絡先と復旧手順を平時に準備しておきたい。</li>
</ul>
<h2>SonicWall SMA1000のゼロデイ悪用：更新と公開範囲の確認</h2>
<ul>
<li>SonicWallは、SMA1000の二つの脆弱性、CVE-2026-15409とCVE-2026-15410がゼロデイ攻撃で悪用されたとして、更新を呼びかけた。</li>
<li>ゼロデイは、修正が利用者に届く前から攻撃に使われる可能性がある欠陥を指す。リモート接続機器は外部から利用されるため、狙われた際の影響が大きくなりやすい。</li>
<li>管理者は対象機器とバージョンを確かめ、提供元の更新案内に従うとともに、不要な公開や古いアカウントが残っていないかを見直したい。</li>
<li>多要素認証を設定していても、機器そのものの脆弱性が入口になる場合がある。認証だけに頼らず、更新と公開範囲の管理を組み合わせる必要がある。</li>
</ul>
<h2>AsyncAPIのnpmパッケージ侵害：依存関係からのマルウェア配布</h2>
<ul>
<li>AsyncAPI名前空間の四つのnpmパッケージが侵害され、認証情報を盗む機能を含む多段階のマルウェアローダーを配布したと報じられた。</li>
<li>開発者が自分で書いたコードに問題がなくても、組み込んだ外部パッケージが侵害されれば、開発環境やCIの認証情報が危険にさらされる。これがソフトウェア供給網のリスクである。</li>
<li>影響を受ける版を使った可能性がある組織は、依存関係の確認、ロックファイルの見直し、トークンの失効と再発行、ビルド環境の調査を進めたい。</li>
<li>依存パッケージを最新版へ一律に更新するだけでは、侵害済みの開発環境を見落とすおそれがある。使用した版と認証情報の履歴を追うことが重要になる。</li>
</ul>
<h2>Zoomのアカウント乗っ取り脆弱性：デスクトップ利用者は更新を</h2>
<ul>
<li>Zoomは、Windows向けデスクトップクライアントとソフトウェア開発キットに、認証されていない第三者によるアカウント乗っ取りにつながる可能性がある重大な脆弱性があるとして警告した。</li>
<li>オンライン会議のアカウントは、連絡先、会議予定、招待、業務上のやり取りへつながる入口になる。修正版がある場合は、公式の案内から更新を確認したい。</li>
<li>会議ツールを名乗る偽の更新通知も便乗しやすい。メールやチャットのリンクではなく、アプリ本体か公式サイトから更新するのが安全である。</li>
<li>管理者は、端末管理ツールで更新状況を把握し、対象版が残っていないか確認したい。利用者への案内は、公式の更新経路を明記するとよい。</li>
</ul>
<h2>まとめ</h2>
<ul>
<li>今日の共通点は、月例更新、公開サーバー、リモート接続、開発用パッケージ、会議ツールまで、日常の業務基盤が攻撃の入口になり得ることだ。</li>
<li>個人は公式経路で更新し、組織は資産を把握して、悪用中の脆弱性と認証情報の漏えいを優先的に確認したい。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security: Microsoft Patches a Record 570 Security Flaws — https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/</li>
<li>JPCERT/CC: 2026年7月マイクロソフトセキュリティ更新プログラムに関する注意喚起 — https://www.jpcert.or.jp/at/2026/at260020.html</li>
<li>IPA: Microsoft 製品の脆弱性対策について（2026年7月） — https://www.ipa.go.jp/security/security-alert/2026/0715-ms.html</li>
<li>BleepingComputer: CISA warns admins to patch actively exploited SharePoint flaws — https://www.bleepingcomputer.com/news/security/cisa-warns-admins-to-patch-actively-exploited-sharepoint-flaws/</li>
<li>BleepingComputer: SonicWall warns of SMA1000 flaws exploited in zero-day attacks, patch now — https://www.bleepingcomputer.com/news/security/sonicwall-warns-of-sma1000-flaws-exploited-in-zero-day-attacks-patch-now/</li>
<li>BleepingComputer: AsyncAPI npm packages infected with credential-stealing malware — https://www.bleepingcomputer.com/news/security/-asyncapi-npm-packages-infected-with-credential-stealing-malware/</li>
<li>BleepingComputer: Zoom warns of critical account takeover vulnerability — https://www.bleepingcomputer.com/news/security/zoom-warns-of-critical-account-takeover-vulnerability/</li>
</ul>

</details>

---

[← 2026-07-16 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
