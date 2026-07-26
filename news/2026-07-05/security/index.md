---
title: "サーバー800台押収・恐喝集団Kairos・電力インフラ狙う新型スパイ集団 セキュリティニュース【2026/07/05】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# サーバー800台押収・恐喝集団Kairos・電力インフラ狙う新型スパイ集団 セキュリティニュース【2026/07/05】

**2026-07-05 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-05-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-05-security)

---

## 概要

ロシア系サイバー攻撃を支えたホスティング業者からサーバー800台を押収したオランダ当局、暗号化せずに恐喝する米政府機関相手のKairos事件、要人の身元流出を国防総省が調査するDialogデータ流出、政府機関と電力インフラを狙う新型スパイ集団「Armored Likho」、認証情報窃取からランサムウェア実行まで一括で担う多機能マルウェア「Avalon」、監視カメラやドローンにも影響するFatFsの未修正脆弱性、Palo Alto Networks製PAN-OSの認証回避脆弱性、過去最多となった2026年6月のMicrosoft月例パッチなど、今日のセキュリティニュース8本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・オランダ当局がサーバー800台を押収、ロシア系サイバー攻撃を支えたホスティング業者を摘発
・米政府機関が「ランサムウェアを名乗らない」恐喝集団Kairosに約1億5000万円を支払い
・米国防総省、要人の身元が特定された「Dialog」データ流出を調査
・新たなスパイ集団「Armored Likho」、政府機関と電力インフラを狙い新型窃取ツール「BusySnake」で攻撃
・多機能マルウェア「Avalon」が登場——認証情報窃取からランサムウェア実行まで一括で担う
・USBメモリやSDカードの読み書きに使われる基盤ソフト「FatFs」に未修正の脆弱性7件、監視カメラやドローンにも影響
・Palo Alto Networks製「PAN-OS」に認証回避の脆弱性（CVE-2026-0265）、JPCERTが注意喚起
・2026年6月のMicrosoft月例パッチが過去最多、約200件の脆弱性を一括修正

▼ 参考ソース
- Krebs on Security: Netherlands Seizes 800 Servers, Arrests 2 for Aiding Cyberattacks
  https://krebsonsecurity.com/2026/05/netherlands-seizes-800-servers-arrests-2-for-aiding-cyberattacks/
- The Hacker News: U.S. Government Entity Paid Kairos $1 Million in Data-Theft Extortion Case
  https://thehackernews.com/2026/07/us-government-entity-paid-kairos-group.html
- Wired Security: The Pentagon Is Looking Into the Dialog Data Exposure for Unmasking National Security Officials
  https://www.wired.com/story/the-pentagon-is-looking-into-the-dialog-data-exposure-for-unmasking-national-security-officials/
- The Hacker News: Armored Likho Targets Government Agencies, Power Sector with BusySnake Stealer
  https://thehackernews.com/2026/07/armored-likho-targets-government.html
- The Hacker News: New Avalon Malware Framework Packs CrownX Ransomware Capabilities
  https://thehackernews.com/2026/07/new-avalon-malware-framework-packs.html
- The Hacker News: Unpatched Flaws Disclosed in Filesystem Bundled Into Millions of Embedded Devices
  https://thehackernews.com/2026/07/unpatched-flaws-disclosed-in-filesystem.html
- JPCERT/CC: Palo Alto Networks製PAN-OSにおける認証回避の脆弱性（CVE-2026-0265）に関する注意喚起
  https://www.jpcert.or.jp/at/2026/at260015.html
- Krebs on Security: A Record-Breaking Patch Tuesday for June 2026
  https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/

#セキュリティ #サイバーセキュリティ #ランサムウェア #マルウェア #ずんだもん #四国めたん #ゆっくり解説 #脆弱性 #重要インフラ #PatchTuesday

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>オランダ当局がサーバー800台を押収、ロシア系サイバー攻撃を支えたホスティング業者を摘発</h2>
<ul>
<li>オランダの捜査当局が、ロシアの情報機関によるサイバー攻撃・世論工作・偽情報拡散を裏で支えていたホスティング会社2社の共同経営者を逮捕</li>
<li>押収したサーバーは800台以上。両社はEUが制裁対象に指定した「Stark Industries Solutions」の技術基盤を引き継いで運用していた</li>
<li>Stark Industries Solutionsはロシア発サイバー攻撃の「踏み台」としてたびたび使われてきたインフラで、今回の摘発はその供給網を断つ動き</li>
</ul>
<h2>米政府機関が「ランサムウェアを名乗らない」恐喝集団Kairosに約1億5000万円を支払い</h2>
<ul>
<li>米国のある政府機関が、盗んだファイルの公開をやめさせるためKairosと名乗る集団に約100万ドル（約1億5000万円）を支払っていたことが判明</li>
<li>交渉チャットの流出記録とブロックチェーン上の送金履歴を分析した調査で発覚</li>
<li>Kairosはデータを暗号化した形跡が一切なく、実態は「ファイルを盗んで公開すると脅すだけ」の恐喝専門集団とみられる。ランサムウェア対策だけでは防げない新しい脅迫手口として注目される</li>
</ul>
<h2>米国防総省、要人の身元が特定された「Dialog」データ流出を調査</h2>
<ul>
<li>民間の非公開グループから流出した記録に、ホワイトハウスの上級情報当局者や特殊作戦部隊の現役将校など、国家安全保障に関わる人物の個人情報が含まれていたことが判明</li>
<li>米国防総省がこの「Dialogデータ流出」について調査を開始</li>
<li>一般人が使う趣味・交流系サービスであっても、登録情報の流出が要人の身元特定や国家安全保障上のリスクにつながり得ることを示す事例</li>
</ul>
<h2>新たなスパイ集団「Armored Likho」、政府機関と電力インフラを狙い新型窃取ツール「BusySnake」で攻撃</h2>
<ul>
<li>セキュリティ企業カスペルスキーが、これまで知られていなかった攻撃集団「Armored Likho」を新たに特定</li>
<li>ロシア・ブラジル・カザフスタンの政府機関や電力セクターを標的に、個人向けの金銭目的攻撃と組織向けのスパイ活動を組み合わせて展開</li>
<li>使用するマルウェア「BusySnake」は情報窃取に特化しており、電力など生活インフラを狙う点で被害が社会全体に及ぶ可能性がある</li>
</ul>
<h2>多機能マルウェア「Avalon」が登場——認証情報窃取からランサムウェア実行まで一括で担う</h2>
<ul>
<li>これまで報告のなかったモジュール型マルウェア「Avalon」が発見される。多段階のフィッシングメールを通じて配布され、従来型のセキュリティ対策をすり抜ける設計</li>
<li>認証情報の窃取、社内ネットワーク内での侵入拡大、遠隔操作、バックアップの破壊、そしてランサムウェア「CrownX」による最終的な暗号化までを一つの枠組みで実行</li>
<li>「一つのツールで攻撃の全工程を完結させる」タイプのマルウェアが増えており、侵入の早期段階で気づけるかが被害の分かれ目になる</li>
</ul>
<h2>USBメモリやSDカードの読み書きに使われる基盤ソフト「FatFs」に未修正の脆弱性7件、監視カメラやドローンにも影響</h2>
<ul>
<li>セキュリティ企業runZeroが、USBメモリやSDカードのFAT/exFAT形式を読み書きするための小型ソフトウェア部品「FatFs」に7件の脆弱性を発見</li>
<li>FatFsは監視カメラ・ドローン・産業用制御機器・ハードウェア型の暗号資産ウォレットなど、極めて幅広い機器のファームウェアに組み込まれている</li>
<li>私たちが直接触れることのない小さな部品の欠陥でも、身の回りの機器（防犯カメラなど）の安全性に影響し得るという典型例。メーカー側の対応待ちが基本</li>
</ul>
<h2>Palo Alto Networks製「PAN-OS」に認証回避の脆弱性（CVE-2026-0265）、JPCERTが注意喚起</h2>
<ul>
<li>企業のネットワークを守る境界機器で使われる「PAN-OS」に、クラウド認証サービス（CAS）を有効にしている場合に認証を回避されうる脆弱性が発見された</li>
<li>悪用されると、外部の攻撃者が正規の認証手続きを経ずにPAN-OSへアクセスできる可能性がある</li>
<li>JPCERT/CCが国内の利用組織に向けて注意喚起を発出。企業のネットワーク管理者は速やかな対応が必要</li>
</ul>
<h2>2026年6月のMicrosoft月例パッチが過去最多、約200件の脆弱性を一括修正</h2>
<ul>
<li>Microsoftが2026年6月分の月例セキュリティ更新（Patch Tuesday）を公開。修正件数は約200件に達し、月例更新として過去最多を記録</li>
<li>そのうち約30件は最も深刻な「緊急（Critical）」評価。少なくとも3件はすでに攻撃コードが公開されている状態</li>
<li>Windowsパソコンを使う人は、月例更新の適用が後回しになりがちだが、今回は特に早めの適用が推奨される規模の修正内容</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://krebsonsecurity.com/2026/05/netherlands-seizes-800-servers-arrests-2-for-aiding-cyberattacks/</li>
<li>https://thehackernews.com/2026/07/us-government-entity-paid-kairos-group.html</li>
<li>https://www.wired.com/story/the-pentagon-is-looking-into-the-dialog-data-exposure-for-unmasking-national-security-officials/</li>
<li>https://thehackernews.com/2026/07/armored-likho-targets-government.html</li>
<li>https://thehackernews.com/2026/07/new-avalon-malware-framework-packs.html</li>
<li>https://thehackernews.com/2026/07/unpatched-flaws-disclosed-in-filesystem.html</li>
<li>https://www.jpcert.or.jp/at/2026/at260015.html</li>
<li>https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/</li>
</ul>

</details>

---

[← 2026-07-05 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
