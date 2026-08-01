---
title: "VMware緊急修正とTeams偽サポート攻撃【セキュリティニュース 2026/07/31】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# VMware緊急修正とTeams偽サポート攻撃【セキュリティニュース 2026/07/31】

**2026-07-31 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-31-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-31-security)

---

## 概要

VMwareの認証回避・仮想マシン脱出、Teamsの偽IT担当から17時間未満で進むランサムウェア、npmサプライチェーン侵害、ChromeのAI脆弱性修正、Analog Devicesの情報流出を解説します。

▼ 今日のトピック
・npm人気パッケージ侵害を北朝鮮系へ帰属
・VMwareのCVSS 9点台3件、回避策なし
・Chrome 2版で1,072件を修正
・Teams通話からChaosランサムウェア
・Analog Devicesがファイル流出を開示

▼ 参考記事
・BleepingComputer「Amazon links Debug, Chalk NPM supply-chain attacks to North Korean hackers」
https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/
・BleepingComputer「VMware fixes three critical flaws allowing auth bypass, VM escapes」
https://www.bleepingcomputer.com/news/security/vmware-fixes-three-critical-flaws-allowing-auth-bypass-vm-escapes/
・BleepingComputer「Google says AI helped Chrome fix 1,072 security bugs in two releases」
https://www.bleepingcomputer.com/news/google/google-says-ai-helped-chrome-fix-1-072-security-bugs-in-two-releases/
・BleepingComputer「Microsoft Teams vishing attacks lead to Chaos ransomware attacks」
https://www.bleepingcomputer.com/news/security/microsoft-teams-vishing-attacks-lead-to-chaos-ransomware-attacks/
・BleepingComputer「Analog Devices discloses data breach, says operations unaffected」
https://www.bleepingcomputer.com/news/security/analog-devices-discloses-data-breach-says-operations-unaffected/

#サイバーセキュリティ #ランサムウェア #VMware #Chrome #MicrosoftTeams #脆弱性 #情報漏えい #ゆっくり解説 #ずんだもん

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース（2026年7月31日）</h1>
<p><strong>キーワード:</strong> npmサプライチェーン / VMware / Chrome / Teamsビッシング / 半導体データ侵害 / 緊急パッチ</p>
<h2>オープニング：2026年7月31日 — セキュリティニュース</h2>
<p>本日は、開発者が日常的に取り込むオープンソース部品、企業サーバーを束ねる仮想化基盤、毎日使うブラウザーと社内チャットを取り上げる。共通点は、信頼済みの道具や正規機能が攻撃経路になることだ。最後に、半導体企業の開示から「業務影響なし」と「情報流出なし」を混同しない読み方も確認する。</p>
<h2>npm人気パッケージ侵害を北朝鮮系へ帰属</h2>
<ul>
<li>Amazonは7月30日、<code>typo-crypto</code>、<code>debug</code>、<code>chalk</code>、<code>axios</code>を狙った一連のnpmサプライチェーン攻撃を、北朝鮮系Sapphire Sleetへ中程度の確度で帰属した。</li>
<li><code>debug</code>と<code>chalk</code>の侵害は2025年9月に発生し、2時間でクラウド環境の推定10%へ影響。2026年3月には週間1億ダウンロード超の<code>axios</code>が標的になった。</li>
<li>攻撃者は保守担当者をソーシャルエンジニアリングで欺き、悪意ある更新を正規配布経路へ載せた。数か月かけて信用を築く、機能を複数パッケージへ分割する、外部サーバーから後段処理を取得するなど、静的検査を避ける手法が使われる。</li>
<li>組織はロックファイルとハッシュを固定し、依存関係更新を自動承認せず、導入後の外部通信と秘密情報アクセスを監視する必要がある。帰属は断定ではなく、攻撃手口・指令基盤・運用類似性に基づく評価である。</li>
</ul>
<h2>VMwareに認証回避と仮想マシン脱出の緊急修正</h2>
<ul>
<li>Broadcomは7月30日、vCenter、ESX、Workstation、Fusionの5件を修正した。うち3件はCVSS 9点台の緊急度で、回避策はない。</li>
<li>CVE-2026-59309は認証なしでvCenterの認証を回避し、CVE-2026-59310はSyslogサーバーのディレクトリトラバーサルから任意コード実行を可能にする。いずれもCVSS 9.8。</li>
<li>CVE-2026-47876はVMXNET3仮想ネットワークアダプターの境界外書き込みで、仮想マシン内の管理者がESXホストへコードを実行する「仮想マシン脱出」を起こしうる。CVSSは9.3。</li>
<li>vCenter更新中は管理画面が一時停止するが稼働中の仮想マシンは継続する。ESX更新には再起動が必要なため、vMotionとローリング再起動で停止範囲を抑える。現時点で悪用確認はないが、Broadcomは緊急変更として扱うよう求めた。</li>
</ul>
<h2>Chrome 2版で1,072件、AIが脆弱性修正を加速</h2>
<ul>
<li>GoogleはChrome 149と150で1,072件のセキュリティ不具合を修正し、直前23世代の合計を上回ったと説明した。</li>
<li>大規模言語モデルを発見、報告再現、重要度判定、担当割当、修正候補、テスト生成まで使う。13年以上残っていたサンドボックス脱出も発見し、侵害済み描画処理からローカルファイルを読ませる経路を塞いだ。</li>
<li>自動処理は月に数百時間の開発工数を節約し、5月には重大1件を含む20件超の本番混入を防いだという。ただしAIは従来のファジングや人間のレビューを置き換えず、複数候補を別のエージェントと開発者が評価する。</li>
<li>修正コード公開から利用者への配信までが長いと攻撃者に解析時間を与える。Googleは週次更新、週2回の試行、再起動不要の動的パッチを進める。利用者側では自動更新を有効にし、ブラウザー再起動を先延ばしにしないことが重要である。</li>
</ul>
<h2>Teamsの偽IT担当から17時間未満でランサムウェア</h2>
<ul>
<li>SophosがSTAC4749として追跡する攻撃は、2026年2月から6月に数十組織を狙い、少なくとも3件でChaosランサムウェアを展開した。ある事例は最初の接触から暗号化まで17時間未満だった。</li>
<li>攻撃者は外部Microsoft TeamsアカウントからIT支援担当を装い、通話は多くが2分から2分半。Quick AssistやRemSuppを起動・導入させ、PowerShellでバックドアを配置した。</li>
<li>レジストリ登録をRealtekやWindows音声部品に見せかけ、DWAgent、AnyDesk、リモートデスクトップも予備経路として使った。標的の95%はカナダ50%、米国45%だった。</li>
<li>社内チャットに表示される名前だけで本人確認せず、外部テナントからの連絡を明示し、遠隔支援は利用者からではなく正式チケットから開始する。最初の不審通話後は、端末隔離と認証情報失効を同日中に行う必要がある。</li>
</ul>
<h2>Analog Devices、ファイル流出をSECへ開示</h2>
<ul>
<li>半導体大手Analog Devicesは、6月23日に一部システムへの不正アクセスを検知し、特定ファイルが持ち出されたと米証券取引委員会へ開示した。</li>
<li>外部専門家と法執行機関を交えて封じ込めと調査を続ける。流出データの種類、影響人数、侵入経路は現時点で公表されていない。</li>
<li>同社は業務と財務への重大な影響は見込まないとしたが、これは流出情報が無害という意味ではない。被害者と規制当局への通知は、内容確認後に行うとしている。</li>
<li>同社は産業制御、自動車、通信、医療、航空宇宙、データセンター向け半導体を供給する。取引先は侵害を口実にした請求書変更や認証要求に備え、別経路で依頼を確認すべきである。</li>
</ul>
<h2>まとめ</h2>
<p>今日の5件は、パッケージ更新、仮想化管理、ブラウザー更新、社内支援、取引先通知という「いつもの正規経路」が狙われた。防御の要点は、信頼を無条件に継承せず、更新の出所と変更内容、支援依頼の本人性、侵害開示の範囲を別々に確認することである。</p>
<h2>参考ソース</h2>
<ul>
<li>BleepingComputer「Amazon links Debug, Chalk NPM supply-chain attacks to North Korean hackers」 https://www.bleepingcomputer.com/news/security/amazon-links-debug-chalk-npm-supply-chain-attacks-to-north-korean-hackers/</li>
<li>BleepingComputer「VMware fixes three critical flaws allowing auth bypass, VM escapes」 https://www.bleepingcomputer.com/news/security/vmware-fixes-three-critical-flaws-allowing-auth-bypass-vm-escapes/</li>
<li>BleepingComputer「Google says AI helped Chrome fix 1,072 security bugs in two releases」 https://www.bleepingcomputer.com/news/google/google-says-ai-helped-chrome-fix-1-072-security-bugs-in-two-releases/</li>
<li>BleepingComputer「Microsoft Teams vishing attacks lead to Chaos ransomware attacks」 https://www.bleepingcomputer.com/news/security/microsoft-teams-vishing-attacks-lead-to-chaos-ransomware-attacks/</li>
<li>BleepingComputer「Analog Devices discloses data breach, says operations unaffected」 https://www.bleepingcomputer.com/news/security/analog-devices-discloses-data-breach-says-operations-unaffected/</li>
</ul>

</details>

---

[← 2026-07-31 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
