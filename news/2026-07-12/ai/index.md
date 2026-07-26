---
title: "【速報】Meta、Instagram新AI機能を公開直後に撤回 ほか今週のAI業界まとめ 2026/07/12"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# 【速報】Meta、Instagram新AI機能を公開直後に撤回 ほか今週のAI業界まとめ 2026/07/12

**2026-07-12 / 生成AIニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-07-12-ai/ai_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-07-12-ai)

---

## 概要

Metaの物議を醸したAI画像機能の撤回から、Google量子プロセッサの自己較正技術、OpenAI・Anthropic・Mistralの最新動向まで、今日の生成AI・量子コンピュータニュースをずんだもんと四国めたんが解説します。

▼ 今日のトピック
・Meta、Instagram新AI画像機能「Muse Image」を公開直後に撤回
・Google、量子プロセッサ「Willow」が計算しながら自己較正する新手法を発表
・OpenAI、家族・高齢者向け専任プロダクトマネージャーを募集
・Anthropic、1000人規模のAI人材育成プログラム「Claude Corps」に230億円を投資
・Mistral、数式やコードの「証明」ができるオープンソースAI「Leanstral 1.5」公開
・Google、アフリカ発AIスタートアップ支援拠点をガーナに開設

▼ 参考記事・ソース
・TechCrunch「Meta removes controversial AI feature on Instagram after backlash」 https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/
・Variety「Meta Suspends Instagram AI Image Feature After Days of Backlash」 https://variety.com/2026/biz/news/meta-suspends-ai-image-instagram-feature-backlash-1236806989/
・The Quantum Insider「Google Study Shows Quantum Computer Can Learn From Its Own Errors While It Computes」 https://thequantuminsider.com/2026/07/10/google-study-shows-quantum-computer-can-learn-from-its-own-errors-while-it-computes/
・Ars Technica「Quantum error correction can constantly recalibrate a processor」 https://arstechnica.com/science/2026/07/quantum-error-correction-can-constantly-recalibrate-a-processor/
・TechCrunch「OpenAI bets on families as ChatGPT goes deeper into households」 https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/
・Anthropic「Introducing Claude Corps」 https://www.anthropic.com/news/claude-corps
・Forbes「Anthropic Invests $150 Million To Launch 1,000 Claude Corps Fellowships」 https://www.forbes.com/sites/michaeltnietzel/2026/06/18/anthropic-invests-150-million-to-launch-1000-claude-corps-fellowships/
・The Decoder「Mistral's open-source Leanstral 1.5 aces formal math benchmarks and catches real bugs in code」 https://the-decoder.com/mistrals-open-source-leanstral-1-5-aces-formal-math-benchmarks-and-catches-real-bugs-in-code/
・Business Tech Africa「Google Debuts Applied AI Lab In Africa, Backs It With New Infrastructure Investments」 https://techbuild.africa/google-applied-ai-lab-in-africa-investments/

#生成AI #ChatGPT #Claude #LLM #AI #人工知能 #ゆっくり解説 #ずんだもん #四国めたん #OpenAI #Anthropic #Google #AI最新情報 #AIニュース

---

<details>
<summary>スライド（クリックで展開）</summary>

<h2>{Meta|メタ}、{Instagram|インスタグラム}の新{AI|エーアイ}画像機能を公開直後に撤回</h2>
<ul>
<li>{Meta|メタ}が自社{AI|エーアイ}部門「{Meta Superintelligence Labs|メタ スーパーインテリジェンス ラブズ}」開発の新機能「{Muse Image|ミューズ イメージ}」を公開したが、数日で撤回した</li>
<li>問題視されたのは、他人の公開{Instagram|インスタグラム}アカウントを{@|アットマーク}メンションするだけで、その人物の画像を使ったAI生成画像を作れる仕組み</li>
<li>18歳以上の公開アカウント利用者は「オプトアウト」しない限り自動的に対象となり、自分の画像が使われても本人に通知されない設計だった</li>
<li>{トム・ハンクス|トム ハンクス}氏や{メリル・ストリープ|メリル ストリープ}氏らが所属する大手芸能事務所{CAA|シーエーエー}が{Meta|メタ}に直接抗議し、対応の見直しを要求</li>
<li>{Meta|メタ}は公式ブログで「意図と違う受け止められ方をした」として機能停止を発表したが、他の{AI|エーアイ}学習向けデータ収集自体は継続しており、プライバシー配慮との整合性が問われている</li>
</ul>
<h2>{Google|グーグル}、量子プロセッサが計算しながら自分で誤りを補正する新手法を発表</h2>
<ul>
<li>{Google|グーグル}の研究チームが、超伝導量子プロセッサ「{Willow|ウィロー}」を使い、計算を止めずに自己補正し続ける新しいエラー訂正の枠組みを発表した</li>
<li>従来の量子コンピュータは、精度を保つために計算を一時中断して「較正」、キャリブレーションをやり直す必要があったが、この手法では較正と計算を分離せず同時に行う</li>
<li>強化学習の仕組みを使い、約4万個のパラメーターをリアルタイムで制御しながら誤り耐性を持つ大規模な論理量子ビットの調整を継続できることを実証</li>
<li>人工的にハードウェアの状態を揺らす「ドリフト」を与えた実験では、論理エラー率の安定性が3.5倍向上し、誤り率自体も約20パーセント低減した</li>
<li>将来、量子アルゴリズムが長く複雑になるほど、計算を止めない連続較正の重要性は増すとみられ、実用的な量子コンピュータへの一歩と位置づけられている</li>
</ul>
<h2>{OpenAI|オープンエーアイ}、家族・高齢者向け専任プロダクトマネージャーを募集</h2>
<ul>
<li>{OpenAI|オープンエーアイ}が、{ChatGPT|チャットジーピーティー}を家族・介護者・高齢者向けに設計する専任プロダクトマネージャーの求人をサンフランシスコで公開した</li>
<li>{ChatGPT|チャットジーピーティー}公開から3年以上が経ち、個人ユーザー中心の設計から家庭全体を意識した製品戦略へと転換する動き</li>
<li>直近1年で35歳以上の利用者比率が26パーセントから31パーセントに増える一方、18歳から24歳の比率は34パーセントから29パーセントへ減少しており、利用者層の高齢化が背景にある</li>
<li>同社はすでに10代向けの保護者による利用制限機能や、自傷などの兆候を検知した際に家族へ通知する「{Trusted Contact|トラステッド コンタクト}」機能を導入済み</li>
<li>家族・高齢者という「信頼が重視される」領域への本格参入は、安全性への配慮と事業拡大の両立が課題になるとみられる</li>
</ul>
<h2>{Anthropic|アンソロピック}、1000人規模のAI人材育成「{Claude Corps|クロード コープス}」に230億円を投資</h2>
<ul>
<li>{Anthropic|アンソロピック}が、若手人材をアメリカ全土の非営利団体に1年間フルタイムで派遣し、{Claude|クロード}の活用を教える新プログラム「{Claude Corps|クロード コープス}」を発表した</li>
<li>総額1億5000万ドル、日本円で約230億円を投じ、3期にわたって合計1000人のフェローを育成する計画</li>
<li>第1期は2026年10月開始で約100人を採用、参加者には年収8万5000ドルの給与とAIトークン利用枠、{Anthropic|アンソロピック}によるオフィスアワー相談が提供される</li>
<li>学歴不問、実務経験2年未満の18歳以上が対象で、AIの活用力・コミュニケーション力・社会課題への熱意で選考される</li>
<li>非営利教育団体「{CodePath|コードパス}」が雇用主として運営を担い、成果測定は「{Social Finance|ソーシャル ファイナンス}」が担当する三者連携体制</li>
</ul>
<h2>{Mistral|ミストラル}、数式やコードの「証明」までできるオープンソースAI「{Leanstral 1.5|リーンストラル ワン ポイント ファイブ}」公開</h2>
<ul>
<li>フランスの{Mistral AI|ミストラル エーアイ}が、形式検証言語「{Lean 4|リーン フォー}」に特化した新モデル「{Leanstral 1.5|リーンストラル ワン ポイント ファイブ}」を無償公開した</li>
<li>ライセンスは商用利用も可能な「{Apache 2.0|アパッチ ツー ポイント オー}」で、総パラメーター数は1190億、実際に働くのは60億という効率的な「専門家混合」型構成</li>
<li>高校レベルから数学オリンピックレベルまでを問う{ベンチマーク|ベンチマーク}「{miniF2F|ミニエフツーエフ}」で正答率100パーセントを達成し、数学的な「証明」を自動生成できる能力を示した</li>
<li>数学だけでなく実用面でも力を発揮し、57件のオープンソースソフトウェアを検証した結果、これまで見つかっていなかったバグを5件発見した</li>
<li>{ChatGPT|チャットジーピーティー}のような「生成」中心のAIとは異なり、「本当に正しいと証明できるか」を扱う分野でのAI活用が広がりつつあることを示す事例</li>
</ul>
<h2>{Google|グーグル}、アフリカ発AIスタートアップ支援拠点「{Africa Applied AI Lab|アフリカ アプライド エーアイ ラボ}」をガーナに開設</h2>
<ul>
<li>{Google|グーグル}が7月1日、ガーナの首都{アクラ|アクラ}にあるAIコミュニティ拠点で、アフリカ大陸向けの新拠点「{Africa Applied AI Lab|アフリカ アプライド エーアイ ラボ}」の開設を発表した</li>
<li>アフリカ固有の社会課題解決を目指す起業家や研究者を対象に、一般公開前の{Google DeepMind|グーグル ディープマインド}の最新モデルへの早期アクセスを提供</li>
<li>「仕事」「知識」「ソフトウェア開発」「創作」「エンターテインメント」の5分野で試作開発を支援し、技術メンタリングや投資家紹介も行う</li>
<li>{4DX Ventures|フォーディーエックス ベンチャーズ}や{Novastar Ventures|ノヴァスター ベンチャーズ}など複数のベンチャーキャピタルが協力し、選抜企業には資金調達の機会も用意される</li>
<li>AI開発が欧米・中国中心で進む中、グローバルサウスの視点や課題を取り込む動きとして注目されており、応募受付は8月31日まで</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li>TechCrunch「Meta removes controversial AI feature on Instagram after backlash」 https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/</li>
<li>Variety「Meta Suspends Instagram AI Image Feature After Days of Backlash」 https://variety.com/2026/biz/news/meta-suspends-ai-image-instagram-feature-backlash-1236806989/</li>
<li>PetaPixel「Meta Removes AI Image Generation Feature That Used Public Instagram Posts Following User Backlash」 https://petapixel.com/2026/07/10/meta-removes-ai-image-generation-feature-that-used-public-instagram-posts-following-user-backlash/</li>
<li>The Quantum Insider「Google Study Shows Quantum Computer Can Learn From Its Own Errors While It Computes」 https://thequantuminsider.com/2026/07/10/google-study-shows-quantum-computer-can-learn-from-its-own-errors-while-it-computes/</li>
<li>Ars Technica「Quantum error correction can constantly recalibrate a processor」 https://arstechnica.com/science/2026/07/quantum-error-correction-can-constantly-recalibrate-a-processor/</li>
<li>TechCrunch「OpenAI bets on families as ChatGPT goes deeper into households」 https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/</li>
<li>OpenAI Careers「Product Manager, Families」 https://openai.com/careers/product-manager-families-san-francisco/</li>
<li>Anthropic「Introducing Claude Corps」 https://www.anthropic.com/news/claude-corps</li>
<li>Forbes「Anthropic Invests $150 Million To Launch 1,000 Claude Corps Fellowships」 https://www.forbes.com/sites/michaeltnietzel/2026/06/18/anthropic-invests-150-million-to-launch-1000-claude-corps-fellowships/</li>
<li>The Decoder「Mistral's open-source Leanstral 1.5 aces formal math benchmarks and catches real bugs in code」 https://the-decoder.com/mistrals-open-source-leanstral-1-5-aces-formal-math-benchmarks-and-catches-real-bugs-in-code/</li>
<li>Mistral AI Docs「Leanstral 1.5 model card」 https://docs.mistral.ai/models/model-cards/leanstral-1-5</li>
<li>Business Tech Africa「Google Debuts Applied AI Lab In Africa, Backs It With New Infrastructure Investments」 https://techbuild.africa/google-applied-ai-lab-in-africa-investments/</li>
<li>Google Labs「Google Africa AI Lab」 https://labs.google/aifuturesfund/africaailab</li>
</ul>

</details>

---

[← 2026-07-12 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
