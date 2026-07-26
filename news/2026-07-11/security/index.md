---
title: "ShareFile緊急停止勧告・レーザーでウォレット乗っ取り セキュリティニュース【2026/07/11】"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# ShareFile緊急停止勧告・レーザーでウォレット乗っ取り セキュリティニュース【2026/07/11】

**2026-07-11 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-11-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-11-security)

---

## 概要

企業向けファイル共有サービス「ShareFile」がサーバー緊急停止を顧客に勧告した重大インシデント、実際に悪用が始まった開発ツール「Gitea」の認証バイパス、ルーターやカメラを支える起動プログラム「U-Boot」の新たな欠陥、レーザー光で暗号資産ウォレット「Tangem」のパスワードをリセットする物理攻撃、WhatsApp経由でAIアシスタント「OpenClaw」からパソコンを乗っ取る攻撃チェーン、悪名高いランサムウェア「Ryuk」実行犯の有罪答弁、中国系ハッカー集団「Volt Typhoon」による米水道インフラ攻撃を想定した保険業界の極秘演習、EUのメッセージ自動スキャン法案「チャットコントロール」まで、今日のセキュリティニュース8本をずんだもんと四国めたんが解説します。

▼ 今日のトピック
・ファイル共有サービス「ShareFile」に緊急停止勧告——「信頼できる脅威」を確認
・開発者向けツール「Gitea」に実際に悪用中の重大な欠陥
・ルーターやカメラを支える「U-Boot」に6件の新たな欠陥
・暗号資産の「金庫カード」、レーザー光でパスワードを勝手にリセットされる
・AIアシスタント「OpenClaw」、WhatsApp経由で乗っ取られる3つの弱点
・悪名高いランサムウェア「Ryuk」実行犯、有罪を認め禁錮15年へ
・「中国が米国の水道網をハッキングしたら」——保険業界の極秘図上演習
・EU、メッセージを自動スキャンする「チャットコントロール」法案が可決へ

▼ 参考記事・ソース
・Bleeping Computer「Progress urges ShareFile customers to shut down servers over "credible" threat」
  https://www.bleepingcomputer.com/news/security/progress-urges-sharefile-customers-to-shut-down-servers-over-credible-threat/
・Bleeping Computer「Hackers exploit critical auth bypass in Gitea Docker image」
  https://www.bleepingcomputer.com/news/security/hackers-exploit-critical-auth-bypass-in-gitea-docker-image/
・The Hacker News「Six New U-Boot Flaws Could Let Malicious Images Crash Devices or Run Code at Boot」
  https://thehackernews.com/2026/07/six-new-u-boot-flaws-could-let.html
・The Hacker News「Laser Attack Resets Tangem Wallet Passwords on Cards That Can't Be Patched」
  https://thehackernews.com/2026/07/laser-attack-resets-tangem-wallet.html
・The Hacker News「Researcher Details WhatsApp-to-Host Attack Chain Using Three OpenClaw Flaws」
  https://thehackernews.com/2026/07/researcher-details-whatsapp-to-host.html
・Bleeping Computer「Ryuk ransomware member pleads guilty in the US, faces 15 years in prison」
  https://www.bleepingcomputer.com/news/security/ryuk-ransomware-member-pleads-guilty-in-the-us-faces-15-years-in-prison/
・Wired「What Happens if China Hacks the US Water Supply? I Went to a Secret War Game to Find Out」
  https://www.wired.com/story/what-happens-if-china-hacks-the-us-water-supply-war-game-volt-typhoon/
・Wired「A Majority of European Lawmakers Voted Against Letting Big Tech Read Our Messages. They're Going to Anyway」
  https://www.wired.com/story/a-majority-of-european-lawmakers-voted-against-letting-big-tech-read-our-messages-theyre-going-to-anyway/

#セキュリティ #サイバーセキュリティ #ランサムウェア #情報漏洩 #ゆっくり解説 #ずんだもん #ハッキング #脆弱性 #セキュリティニュース

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>ファイル共有サービス「ShareFile」に緊急停止勧告——「信頼できる脅威」を確認</h2>
<ul>
<li>米Progress Software社が、企業向けファイル共有サービス「ShareFile」（企業が契約書や個人情報などの重要ファイルをやり取りする際に使うクラウド型サービス）を使う顧客に対し、社内に置いてある「Storage Zone Controller」というWindowsサーバーを今すぐ停止するよう緊急連絡した。</li>
<li>理由は「信頼できる（credible）外部からの脅威」を確認したため。まだ被害の詳細は公表されていないが、Krebs on Security・The Hacker News・Bleeping Computerの複数の専門メディアが同時に報じており、深刻さがうかがえる。</li>
<li>同社は念のため対象アカウントへのアクセスも一時停止した。ShareFileは法律事務所や病院、金融機関など「他人の秘密を預かる仕事」で広く使われており、過去にも同種のファイル転送ソフト「MOVEit」が悪用され世界中で情報流出が起きた前例がある。利用企業は最新の指示に従って対応することが重要。</li>
</ul>
<h2>開発者向けツール「Gitea」に実際に悪用中の重大な欠陥</h2>
<ul>
<li>社内でプログラムのソースコードを管理するための無料ツール「Gitea」（GitHubの自社運用版のようなもの）の公式Dockerイメージ（すぐに使える形にパッケージされたソフト一式）に、認証をすり抜けられる重大な欠陥が見つかった。</li>
<li>この欠陥を突かれると、攻撃者は管理者を含む「誰にでもなりすませる」状態になる。つまり社内の開発チームのアカウントを乗っ取り、ソースコードを盗んだり改ざんしたりできてしまう。</li>
<li>すでに攻撃者による悪用が確認されており、Gitea利用企業は至急パッチを適用する必要がある。</li>
</ul>
<h2>ルーターやカメラを支える「U-Boot」に6件の新たな欠陥</h2>
<ul>
<li>ファームウェアセキュリティ企業Binarlyが、家庭用ルーターや監視カメラ、データセンターのサーバー管理チップなど幅広い機器で使われる起動プログラム「U-Boot」（機器の電源を入れた瞬間に一番最初に動くプログラム）に6件の欠陥を発見した。</li>
<li>うち4件は機器をクラッシュさせるだけだが、残り2件は起動前の段階で悪意あるデータを送り込まれると、OSが立ち上がる前に攻撃者のプログラムを実行されてしまう恐れがある。まだ修正パッチは提供されていない。</li>
<li>「起動前」に感染されると、OSを再インストールしても除去できない可能性があり厄介。対象機器のメーカーからのパッチ提供を待つ必要がある一般利用者は、メーカーの発表に注意したい。</li>
</ul>
<h2>暗号資産の「金庫カード」、レーザー光でパスワードを勝手にリセットされる</h2>
<ul>
<li>ライバル企業Ledgerのセキュリティ研究チーム「Donjon」が、暗号資産（仮想通貨）を保管するハードウェアウォレット「Tangem」のカードに対し、正確なタイミングでレーザー光をチップに当てることで、古いパスワードを知らなくてもパスワードを勝手にリセットできることを実証した。</li>
<li>通常は「元のパスワードが分からなければ資産を守れる」はずが、この手口ではリセット後に攻撃者が資産を自由に送金できてしまう。しかもチップ自体の設計上の弱点のため、ソフトウェア更新では直せない。</li>
<li>ただし実行には専用のレーザー機材とカード本体の物理的な入手が必要で、一般の利用者が街中でいきなり被害に遭う可能性は低い。とはいえ「物さえ盗まれれば安全でなくなる」という点は、貴重品としてのハードウェアウォレットの保管方法を見直すきっかけになる。</li>
</ul>
<h2>AIアシスタント「OpenClaw」、WhatsApp経由で乗っ取られる3つの弱点</h2>
<ul>
<li>パソコンの操作を代行してくれる個人向けAIアシスタント「OpenClaw」に、WhatsAppメッセージを起点として利用者のパソコンを乗っ取れる3つの脆弱性が見つかっていたことが、研究者による詳細レポートで明らかになった。</li>
<li>最も深刻なもの（CVSSスコア8.8、10点満点で危険度が高いほど点数が大きい指標）は、悪意あるコマンドをOSに直接実行させられる欠陥。3つを組み合わせると、パスワードなどの認証情報を盗まれたうえ、パソコンを完全に乗っ取られる恐れがあった。</li>
<li>いずれもすでに修正済みだが、「チャットアプリからAIアシスタント経由でパソコンが乗っ取られる」という新しい攻撃の型を示した点が重要。AIアシスタントを使う際は、常に最新版へアップデートしておくことが対策になる。</li>
</ul>
<h2>悪名高いランサムウェア「Ryuk」実行犯、有罪を認め禁錮15年へ</h2>
<ul>
<li>米国で34歳のアルメニア人の男が、米企業をハッキングし、身代金要求型ウイルス「Ryuk（リューク）」を使ってシステムを暗号化した罪を認めた。最大で禁錮15年の刑を言い渡される見通し。</li>
<li>Ryukは2018年から2021年ごろにかけて病院や自治体を標的にした悪名高いランサムウェアで、当時は新型コロナ対応中の病院が被害に遭い、診療に支障が出る事態も起きていた。</li>
<li>事件から数年を経ての摘発・司法手続きとなるが、国際的な捜査協力によって過去の大規模事件の実行犯が着実に裁かれていることを示す事例。</li>
</ul>
<h2>「中国が米国の水道網をハッキングしたら」——保険業界の極秘図上演習</h2>
<ul>
<li>米誌Wiredの取材によると、保険業界が非公開の場で、中国政府とつながりがあるとされるハッカー集団「Volt Typhoon（ボルト・タイフーン）」が米国の水道インフラを攻撃した場合を想定した図上演習（実際には手を動かさず、シナリオに沿って対応を検討する訓練）を実施した。</li>
<li>想定シナリオは、水道管の破裂が相次ぎ、病院が患者を避難させざるを得なくなるという深刻なもの。Volt Typhoonは以前から水道・電力といった重要インフラのシステムにひそかに侵入し、いつでも攻撃できる状態を作っているとして各国当局が警戒してきた集団。</li>
<li>演習は「実際に起きたら保険金請求や復旧対応をどう回すか」を検証する目的だが、水道や電力のような生活インフラが標的になり得るという現実味のあるリスクを裏付ける内容といえる。</li>
</ul>
<h2>EU、メッセージを自動スキャンする「チャットコントロール」法案が可決へ</h2>
<ul>
<li>欧州の議員の多数が反対票を投じたにもかかわらず、企業が利用者のテキストメッセージやメール、SNSのやり取りを自動スキャンできるようにする「チャットコントロール」法案がこのまま成立する見通しだと米誌Wiredが報じた。</li>
<li>建前は児童虐待コンテンツの検出・防止だが、実現するにはプライベートなメッセージの中身を機械的にチェックする仕組みが必要になり、暗号化によるプライバシー保護の意味が薄れるとの懸念が根強い。</li>
<li>ヨーロッパの利用者に限らず、国際的に展開するメッセージアプリの仕様に影響しうる話であり、「便利なチャットアプリの裏側で何がスキャンされているか」を意識するきっかけになるニュース。</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>https://www.bleepingcomputer.com/news/security/progress-urges-sharefile-customers-to-shut-down-servers-over-credible-threat/</li>
<li>https://www.bleepingcomputer.com/news/security/hackers-exploit-critical-auth-bypass-in-gitea-docker-image/</li>
<li>https://thehackernews.com/2026/07/six-new-u-boot-flaws-could-let.html</li>
<li>https://thehackernews.com/2026/07/laser-attack-resets-tangem-wallet.html</li>
<li>https://thehackernews.com/2026/07/researcher-details-whatsapp-to-host.html</li>
<li>https://www.bleepingcomputer.com/news/security/ryuk-ransomware-member-pleads-guilty-in-the-us-faces-15-years-in-prison/</li>
<li>https://www.wired.com/story/what-happens-if-china-hacks-the-us-water-supply-war-game-volt-typhoon/</li>
<li>https://www.wired.com/story/a-majority-of-european-lawmakers-voted-against-letting-big-tech-read-our-messages-theyre-going-to-anyway/</li>
</ul>

</details>

---

[← 2026-07-11 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
