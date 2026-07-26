---
title: "認証なしで乗っ取り得るOracle EBS脆弱性、優先順位を解説【セキュリティニュース 2026/07/18】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 認証なしで乗っ取り得るOracle EBS脆弱性、優先順位を解説【セキュリティニュース 2026/07/18】

**2026-07-18 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-18-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-18-security)

---

## 概要

悪用が確認されたOracle E-Business SuiteのCVE-2026-46817を取り上げます。対象確認、外部公開の絞り込み、緊急更新、適用後の侵害調査まで、業務を止める判断材料として整理します。
https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-patch-actively-exploited-oracle-flaw-by-saturday/

#セキュリティ #OracleEBS #脆弱性 #パッチ管理 #ずんだもん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース：Oracle EBSの悪用中脆弱性をどう処理するか（2026年7月18日）</h1>
<p><strong>キーワード:</strong> Oracle E-Business Suite / CVE-2026-46817 / Oracle Payments / 緊急パッチ / インターネット公開 / インシデント対応</p>
<h2>CVE-2026-46817：認証なしでOracle Paymentsを乗っ取る危険</h2>
<ul>
<li>対象はOracle E-Business Suite（EBS）のOracle Paymentsにあるファイル転送部品の脆弱性、CVE-2026-46817である。</li>
<li>HTTPで到達できれば、認証を経ずに低い複雑さの攻撃で脆弱なシステムを掌握できると報じられた。CVSSは9.8である。</li>
<li>「Oracle製品を使っているか」ではなく、EBS、Oracle Payments、対象バージョン、HTTP到達性を順に確かめる必要がある。</li>
</ul>
<h2>悪用確認と外部公開：修正待ちにできない理由</h2>
<ul>
<li>Oracleは2026年5月のCritical Patch Updateで修正を提供し、未適用の顧客が攻撃成功につながった事例があると警告した。</li>
<li>脅威インテリジェンス企業は6月29日に実際の悪用を観測し、CISAも7月15日に既知悪用脆弱性として確認した。</li>
<li>外部公開EBSは1,000件超が追跡されていた。ただし、公開台数は侵害台数でも未対策台数でもないため、自組織の露出を個別に確かめる。</li>
</ul>
<h2>影響範囲を確定する：最初に集める四つの事実</h2>
<ul>
<li>まず資産台帳、DNS・ロードバランサー設定、FWルール、脆弱性管理台帳を照合し、EBSの実在と担当者を確定する。</li>
<li>次にOracle Paymentsの利用有無、HTTP/HTTPSの公開先、適用済み更新、直近の設定変更を一枚にまとめる。</li>
<li>委託運用やクラウド利用では、誰がパッチを適用し、誰がログを保有し、誰が停止判断をするかを契約・運用表で確認する。</li>
</ul>
<h2>優先順位と隔離：業務停止と侵害拡大を比べる</h2>
<ul>
<li>優先度が最も高いのは、外部からHTTPで到達でき、Oracle Paymentsを使い、修正が未適用または適用状況が不明な系統である。</li>
<li>緊急パッチが直ちに難しい場合でも、公開経路を止める、許可元を絞る、管理用アクセスを分離するなど、到達性を下げる暫定措置を検討する。</li>
<li>ただし遮断は請求・支払い等の業務を止め得る。業務責任者と復旧担当を同じ判断線に置き、例外の期限と代替手段を記録する。</li>
</ul>
<h2>適用前の準備：パッチ作業を侵害調査から切り離さない</h2>
<ul>
<li>修正前に、対象ホスト、現行版、公開設定、担当者、作業予定時刻を記録する。適用漏れを防ぎ、後で説明できる形にするためである。</li>
<li>既知悪用脆弱性では、更新だけで過去の侵入可能性は消えない。更新前後のログと設定の保全を、変更計画に含める。</li>
<li>バックアップは存在確認だけで終えず、復元先、所要時間、決済・業務データとの整合性、復旧権限を確認する。</li>
</ul>
<h2>適用後の確認：復旧ではなく検証までを完了条件にする</h2>
<ul>
<li>更新後はバージョンと適用結果を確認し、外部から不要な到達経路が残っていないかを再点検する。</li>
<li>予期しない管理者権限、設定変更、不審な通信やジョブがないかを、保存した基準時点と比べて確認する。</li>
<li>異常があれば、影響システムを隔離し、証跡を保全して、認証情報・接続先・変更履歴の範囲を調査する。早い消去は調査を難しくする。</li>
</ul>
<h2>運用判断に変える：次の緊急修正へ備える</h2>
<ul>
<li>CISAはOracle製品で悪用された脆弱性を多数追跡しており、一部はランサムウェアにも使われた。今回だけの例外対応にしない。</li>
<li>公開資産の棚卸し、製品・版・所有者の対応付け、既知悪用情報の受信、期限付きの是正判断を定例化する。</li>
<li>経営・業務側には「CVSSが高いから」だけでなく、認証不要、外部到達、実悪用、決済系という具体的な判断材料を示すと停止判断が速くなる。</li>
</ul>
<h2>まとめと参考ソース</h2>
<ul>
<li>CVE-2026-46817への対応は、EBSとOracle Paymentsの該当性確認、外部到達性の低減、緊急更新、侵害有無の検証を一つの作業として進める。</li>
<li>最優先は、外部公開され、Oracle Paymentsを利用し、修正状況が不明または未適用の環境である。</li>
<li>
<p>本回は下記の既存記載ソースの範囲で構成した。外部公開数は規模の目安であり、自組織の侵害状況を示すものではない。</p>
</li>
<li>
<p>BleepingComputer: CISA orders feds to patch actively exploited Oracle flaw by Saturday — https://www.bleepingcomputer.com/news/security/cisa-orders-feds-to-patch-actively-exploited-oracle-flaw-by-saturday/</p>
</li>
</ul>

</details>

---

[← 2026-07-18 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
