---
title: "【速報】xAI「Grok 4.5」一般公開 ほか今週のAI業界まとめ 2026/07/09"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 【速報】xAI「Grok 4.5」一般公開 ほか今週のAI業界まとめ 2026/07/09

**2026-07-09 / 生成AIニュース**

<video controls width="100%" src="https://archive.org/download/news-pickup-2026-07-09-ai/ai_yukkuri.mp4"></video>

<audio controls src="https://archive.org/download/news-pickup-2026-07-09-ai/ai_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-09-ai)

---

## 概要

xAIの新モデル「Grok 4.5」公開とOpenAIの新音声モデル「GPT-Live」から、ロボティクスAI・Google偽画像検出・大学のAIカンニング問題・ホワイトハウス量子産業サミットまで、今週の生成AI・量子コンピュータの動きをずんだもんと四国めたんが解説します。

▼ 今日のトピック
・xAIが新モデル「Grok 4.5」を一般公開、Opus 4.7クラスの性能を低コストで実現
・OpenAIが同時発話・同時傾聴が可能な新音声モデル「GPT-Live」を発表
・General Intuitionがビデオゲームデータでロボット向け基盤モデルを開発
・Prime Intellectが企業向けAIエージェント構築支援で130億円規模のシリーズA調達
・Googleの偽画像検出技術「SynthID」がマコネル上院議員の偽入院写真を暴く
・Brown大学で生成AIによるカンニング問題が拡大、教員の3/4が懸念
・MetaのAIスマートグラス、盗撮対策とデータ収集拡大の矛盾が浮き彫りに
・ホワイトハウスが初の量子産業サミットを開催、量子スタートアップOratomicも300億円調達

▼ 参考記事・ソース
・TechCrunch「SpaceXAI releases Grok 4.5, which Elon describes as an 'Opus-class model'」 https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/
・explainx.ai「Grok 4.5 Public Launch July 9: Opus-Class, Cursor-Trained」 https://explainx.ai/blog/grok-4-5-public-launch-spacexai-july-2026
・TechCrunch「OpenAI releases new voice models for more natural live conversations」 https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/
・OpenAI「Introducing GPT-Live」 https://openai.com/index/introducing-gpt-live/
・TechCrunch「This startup thinks robotics is about to have its ChatGPT moment」 https://techcrunch.com/2026/07/08/this-startup-thinks-robotics-is-about-to-have-its-chatgpt-moment/
・TechCrunch「Prime Intellect raises $130M Series A to help enterprises build their own AI agents」 https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/
・TechCrunch「Google's deepfake detector system used to debunk McConnell hoax pic」 https://techcrunch.com/2026/07/08/googles-deepfake-detector-system-used-to-debunk-mcconnell-hoax-pic/
・Inside Higher Ed「Brown Professor Suspects Most of His Class Used AI to Cheat」 https://www.insidehighered.com/news/faculty/learning-assessment/2026/07/08/brown-professor-suspects-most-his-class-used-ai-cheat
・Ars Technica「"We cannot choose to become idiots": The AI cheating scandal roiling Brown University」 https://arstechnica.com/ai/2026/07/we-cannot-choose-to-become-idiots-the-ai-cheating-scandal-roiling-brown-university/
・TechCrunch「Meta wants its AI glasses to seem less creepy. Its AI strategy says otherwise.」 https://techcrunch.com/2026/07/08/meta-wants-its-ai-glasses-to-seem-less-creepy-its-ai-strategy-says-otherwise/
・The Quantum Insider「White House to Convene Quantum Industry Summit as Administration Pushes Innovation Agenda」 https://thequantuminsider.com/2026/07/07/white-house-to-convene-quantum-industry-summit-as-administration-pushes-innovation-agenda/
・The Quantum Insider「Oratomic Raises $300 Million Series A」 https://thequantuminsider.com/2026/07/07/oratomic-raises-300-million-series-a/

#生成AI #ChatGPT #Claude #LLM #AI #人工知能 #ゆっくり解説 #ずんだもん #四国めたん #OpenAI #Anthropic #Google #AI最新情報 #AIニュース

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>{xAI|エックスエーアイ}が新モデル「{Grok 4.5|グロック フォー ポイント ファイブ}」を一般公開</h2>
<ul>
<li>{イーロン・マスク|イーロン マスク}氏率いる{SpaceXAI|スペースエックスエーアイ}が、7月9日に新モデル「{Grok 4.5|グロック フォー ポイント ファイブ}」を一般公開すると発表</li>
<li>マスク氏は「{Opus|オーパス}クラスのモデルだが、より速く低コスト」と説明し、{Anthropic|アンソロピック}の「{Opus 4.7|オーパス フォー ポイント セブン}」に匹敵する性能を主張</li>
<li>1.5兆パラメータの基盤モデル「{V9|ブイナイン}」をベースに、6月に600億ドルで買収合意したコーディングエディタ「{Cursor|カーソル}」の実開発データ（デバッグ履歴・複数ファイル差分・修正履歴）を追加学習に活用</li>
<li>価格は入力100万トークンあたり2ドル、出力100万トークンあたり6ドルで、コーディング検証{SWE-Bench Pro|エスダブリューイー ベンチ プロ}では{Opus 4.8|オーパス フォー ポイント エイト}の4分の1程度のトークン数でタスクを解決したと発表</li>
<li>{SpaceXAI|スペースエックスエーアイ}は2026年末まで毎月新しい基盤モデルを投入する計画を表明しており、{OpenAI|オープンエーアイ}の次世代モデルとの競争が一段と激化</li>
</ul>
<h2>{OpenAI|オープンエーアイ}、同時に話して聞ける新音声モデル「{GPT-Live|ジーピーティー ライブ}」を発表</h2>
<ul>
<li>{OpenAI|オープンエーアイ}が、会話中に「話す」と「聞く」を同時にこなせる新音声モデル「{GPT-Live-1|ジーピーティー ライブ ワン}」と軽量版「{GPT-Live-1 mini|ジーピーティー ライブ ワン ミニ}」を発表</li>
<li>双方向同時処理（フルデュプレックス）方式を採用し、自然な割り込みや相づち（「うんうん」「はい」など）を挟みながら会話でき、同時通訳のような用途にも対応</li>
<li>ウェブ検索や高度な推論が必要な場面では裏側で最新の大規模モデルに処理を委ね、結果を会話に自然に差し戻す仕組み</li>
<li>無料版の{ChatGPT|チャットジーピーティー}には{GPT-Live-1 mini|ジーピーティー ライブ ワン ミニ}を標準搭載し、有料プラン利用者は上位モデルにもアクセス可能</li>
<li>今週から{iOS|アイオーエス}・{Android|アンドロイド}・ウェブ版の{ChatGPT|チャットジーピーティー}に順次展開</li>
</ul>
<h2>ビデオゲームのデータでロボットを鍛える新興企業{General Intuition|ジェネラル インテュイション}</h2>
<ul>
<li>ロボット向け汎用基盤モデルを開発する新興企業{General Intuition|ジェネラル インテュイション}が、「ロボティクスにも{ChatGPT|チャットジーピーティー}のような転換点が来る」と主張</li>
<li>{Pim de Witte|ピム デ ウィッテ}最高経営責任者は「モデル自体の汎用性こそが製品」と説明し、2026年6月に23億ドルの評価額で3億2000万ドルを調達済み</li>
<li>インターネット由来のテキストではなく、数百万時間分のビデオゲームのプレイデータ（コントローラー操作と正確なタイミング情報を含む）を学習に活用し、空間・時間の感覚をロボットに獲得させる狙い</li>
<li>実証実験では、わずか8分間の実世界データで微調整しただけで、四足歩行ロボットがカメラ映像のみで動的な環境を移動できたという</li>
<li>自社でロボットを製造するのではなく、他のロボット企業が使う基盤プラットフォームを目指す方針</li>
</ul>
<h2>{Prime Intellect|プライム インテレクト}、企業向けAIエージェント構築支援で130億円規模のシリーズA調達</h2>
<ul>
<li>2024年設立の{Prime Intellect|プライム インテレクト}が、シリーズAで1億3000万ドル（評価額10億ドル）を調達したと発表</li>
<li>最先端AI研究所に依存せず、企業が自前のAIエージェントシステムを訓練できるインフラを提供するのが狙い</li>
<li>計算環境へのアクセス・強化学習フレームワーク・評価ツールを揃えた「フルスタック」型プラットフォームで、必要な機能だけを選んで使えるマーケットプレイス形式を採用</li>
<li>主要投資家は{Radical Ventures|ラディカル ベンチャーズ}（リード）、{Nvidia Ventures|エヌビディア ベンチャーズ}、{Intel Capital|インテル キャピタル}など</li>
<li>年換算売上高1億ドルのペースに達しており、{Ramp|ランプ}や{Zapier|ザピアー}などが顧客に名を連ねる</li>
</ul>
<h2>{Google|グーグル}の偽画像検出技術、上院議員の「病床偽写真」を暴く</h2>
<ul>
<li>{Reddit|レディット}や{X|エックス}で、ケンタッキー州選出の{ミッチ・マコネル|ミッチ マコネル}上院議員が病院のベッドでチューブに囲まれ極度に衰弱した様子の画像が拡散</li>
<li>ファクトチェックサイト「{Snopes|スノープス}」が調査したところ、画像に{Google|グーグル}の透かし技術「{SynthID|シンスアイディー}」の痕跡が検出され、AI生成画像であることが判明</li>
<li>{SynthID|シンスアイディー}は肉眼では見えない透かしを画像に埋め込む技術で、スクリーンショットなど複数プラットフォームを経由した転載後も検出可能</li>
<li>2025年の{Google I/O|グーグル アイオー}で発表され、{Gemini|ジェミニ}や{OpenAI|オープンエーアイ}のモデルが参加する一方、{Anthropic|アンソロピック}は未参加</li>
<li>政治家を狙ったAI偽画像による世論工作が現実の脅威となる中、検出技術が実際に機能した事例として注目されている</li>
</ul>
<h2>{Brown|ブラウン}大学で広がるAIカンニング問題、教授の3/4が懸念</h2>
<ul>
<li>{Brown|ブラウン}大学の経済学教授{ロベルト・セラーノ|ロベルト セラーノ}氏が、約20年ぶりに実施した持ち帰り式の中間試験で、クラスの大半が生成AIを使って不正をした疑いがあると明らかにした</li>
<li>試験を持ち帰り式にしたのは、昨年12月に起きた学内銃撃事件を受け、学生が教室に集まることへの不安を訴えたためだった</li>
<li>教授は「不正をしてもよいと考える優秀な若者が多数を占める社会を許すわけにはいかない。我々は愚か者になることを選べない」と強い危機感を表明</li>
<li>学内アンケートに回答した教員105人のうち4分の3が、学生の生成AI利用による不正を懸念していると回答</li>
<li>{Brown|ブラウン}大学の生成AI教育委員会が初の報告書を今週公表し、大学教育の現場でAIとどう向き合うかが焦点となっている</li>
</ul>
<h2>{Meta|メタ}のAIスマートグラス、「不気味さ軽減」策とデータ収集拡大の矛盾</h2>
<ul>
<li>{Meta|メタ}が、AIスマートグラスのLEDライトが不正に改造・遮蔽された場合にカメラを自動停止する新しい安全機能を発表</li>
<li>無断で他人を録画する「盗撮」への懸念に対応する狙いだが、同社は同時期に個人データの収集・活用範囲を拡大している</li>
<li>公開設定の{Instagram|インスタグラム}投稿写真をAIモデルの学習に利用（オプトアウト方式）し、未共有の写真にも{Meta AI|メタ エーアイ}がアクセスできる仕組みを導入</li>
<li>AIチャットの会話内容を広告配信に活用する方針も明らかになっており、「あなただけが写真・動画を見られる」とする従来の説明との整合性が問われている</li>
<li>表面的なプライバシー対策と、裏側で進む個人データ収集拡大との矛盾が、消費者の不信を招いているとの指摘</li>
</ul>
<h2>ホワイトハウスが量子産業サミットを開催、政府と業界の連携強化へ</h2>
<ul>
<li>ホワイトハウスが7月7日、アイゼンハワー行政府ビルで初の「量子産業サミット」を開催</li>
<li>{ホワイトハウス科学技術政策局|OSTP}局長{マイケル・クラツィオス|マイケル クラツィオス}氏、国家量子調整室長{ブラッド・ブレイクスタンド|ブラッド ブレイクスタンド}氏、商務省・国防総省・エネルギー省・{全米科学財団|NSF}の幹部らが出席し、政府の量子研究戦略・人材育成・産業競争力・サプライチェーンについて議論</li>
<li>{トランプ|トランプ}大統領が量子研究開発の加速と耐量子暗号への移行を求める2つの大統領令に署名したことを受け、政策を実行に移すための官民連携強化が目的</li>
<li>同時期には量子スタートアップ「{Oratomic|オラトミック}」が3億ドルのシリーズAを調達したと発表。中性原子方式を用いた誤り耐性型量子コンピュータの開発を目指し、約1万個の再構成可能な量子ビットで実用規模の計算が可能になるとの見方を示す</li>
<li>{Caltech|カルテック}・{Berkeley|バークレー}・{Harvard|ハーバード}・{Amazon|アマゾン}・{Google|グーグル}出身の研究者が集結し、2020年代末までの商用機実現を目指す</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/">SpaceXAI releases Grok 4.5, which Elon describes as an 'Opus-class model'</a></li>
<li><a href="https://explainx.ai/blog/grok-4-5-public-launch-spacexai-july-2026">Grok 4.5 Public Launch July 9: Opus-Class, Cursor-Trained</a></li>
<li><a href="https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/">OpenAI releases new voice models for more natural live conversations</a></li>
<li><a href="https://openai.com/index/introducing-gpt-live/">Introducing GPT-Live</a></li>
<li><a href="https://techcrunch.com/2026/07/08/this-startup-thinks-robotics-is-about-to-have-its-chatgpt-moment/">This startup thinks robotics is about to have its ChatGPT moment</a></li>
<li><a href="https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/">Prime Intellect raises $130M Series A to help enterprises build their own AI agents</a></li>
<li><a href="https://techcrunch.com/2026/07/08/googles-deepfake-detector-system-used-to-debunk-mcconnell-hoax-pic/">Google's deepfake detector system used to debunk McConnell hoax pic</a></li>
<li><a href="https://www.insidehighered.com/news/faculty/learning-assessment/2026/07/08/brown-professor-suspects-most-his-class-used-ai-cheat">Brown Professor Suspects Most of His Class Used AI to Cheat</a></li>
<li><a href="https://arstechnica.com/ai/2026/07/we-cannot-choose-to-become-idiots-the-ai-cheating-scandal-roiling-brown-university/">"We cannot choose to become idiots": The AI cheating scandal roiling Brown University</a></li>
<li><a href="https://techcrunch.com/2026/07/08/meta-wants-its-ai-glasses-to-seem-less-creepy-its-ai-strategy-says-otherwise/">Meta wants its AI glasses to seem less creepy. Its AI strategy says otherwise.</a></li>
<li><a href="https://thequantuminsider.com/2026/07/07/white-house-to-convene-quantum-industry-summit-as-administration-pushes-innovation-agenda/">White House to Convene Quantum Industry Summit as Administration Pushes Innovation Agenda</a></li>
<li><a href="https://thequantuminsider.com/2026/07/07/oratomic-raises-300-million-series-a/">Oratomic Raises $300 Million Series A</a></li>
</ul>

</details>

---

[← 2026-07-09 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
