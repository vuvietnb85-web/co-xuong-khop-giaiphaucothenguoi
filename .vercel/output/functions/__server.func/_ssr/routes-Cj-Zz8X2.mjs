import { i as __toESM } from "../_runtime.mjs";
import { ht as require_react, mt as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { c as Scan, d as GraduationCap, f as CircleDot, i as Volume2, l as RotateCcw, m as Activity, n as Wind, o as Stethoscope, p as Bone, r as Waypoints, s as Search, t as X, u as HeartPulse } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cj-Zz8X2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var EXTRA_TOPICS = [
	{
		id: "circ-chambers",
		system: "circ",
		tab: "heart",
		vi: "Bốn buồng tim",
		latin: "Atria et ventriculi",
		body: "Nhĩ phải nhận máu tĩnh mạch chủ. Thất phải bơm lên động mạch phổi. Nhĩ trái nhận máu từ phổi. Thất trái bơm vào động mạch chủ, thành dày hơn vì áp lực hệ thống cao hơn. Vách liên thất là chỗ máu hai bên không được trộn ở người lớn.",
		match: (n) => /^(left|right) (atrium|ventricle)$|cardiac_atrium|heart_(left|right)_ventricle|interventricular_septum|papillary muscle|papillary_muscle/i.test(n)
	},
	{
		id: "circ-valves",
		system: "circ",
		tab: "heart",
		vi: "Bốn van tim",
		latin: "Valvae cordis",
		body: "Van ba lá (nhĩ–thất phải) và van hai lá (nhĩ–thất trái) mở thì tâm trương. Van động mạch phổi và van động mạch chủ mở thì tâm thu, ba lá van hình tổ chim. Tiếng tim bình thường chủ yếu là đóng các van này. Mô hình là van người lớn bình thường, không phải van bệnh.",
		match: (n) => /leaflet|atrioventricular valve|mitral_valve|tricuspid_valve|aortic_valve|pulmonary_valve/i.test(n)
	},
	{
		id: "circ-coronary",
		system: "circ",
		tab: "heart",
		vi: "Động mạch vành",
		latin: "Aa. coronariae",
		body: "Vành trái chia liên thất trước (hay gọi LAD) và mũ (LCx). Vành phải (RCA) ở người ưu thế phải — kiểu thường gặp, không phải mọi người — nuôi thành dưới và thường nút xoang. Liên thất trước nuôi thành trước thất trái, phần lớn vách và mỏm. Tắc một nhánh là mẫu nhồi máu theo vùng, không nhìn thấy trên mô hình này vì mô hình không có mảng xơ vữa.",
		match: (n) => /coronary artery|interventricular artery|circumflex artery of heart|coronary sinus|cardiac vein/i.test(n)
	},
	{
		id: "circ-aorta",
		system: "circ",
		tab: "vessel",
		vi: "Động mạch chủ",
		latin: "Aorta",
		body: "Chủ lên, cung, chủ ngực, chủ bụng. Cung cho thân cánh tay-đầu, cảnh chung trái và dưới đòn trái. Chủ bụng nằm trước cột sống, thường chia hai chậu chung ngang đốt L4. Đường kính trên mô hình là người lớn bình thường — không dùng để đo phình.",
		match: (n) => /aorta|aortic arch|brachiocephalic trunk/i.test(n)
	},
	{
		id: "circ-pulm",
		system: "circ",
		tab: "vessel",
		vi: "Mạch phổi",
		latin: "Circulus sanguinis minor",
		body: "Thất phải → thân động mạch phổi → động mạch phổi phải và trái. Máu ở đây nghèo oxy, nên atlas tô xanh, khác động mạch hệ thống. Tĩnh mạch phổi về nhĩ trái, máu giàu oxy, tô đỏ. Đây là quy ước giảng dạy, không phải màu thật lúc mổ.",
		match: (n) => /pulmonary trunk|pulmonary artery|pulmonary vein|lobar artery of|segmental artery of .+lung|vein of .+lung|lingular artery|bifurcation of pulmonary/i.test(n)
	},
	{
		id: "circ-neck",
		system: "circ",
		tab: "vessel",
		vi: "Mạch cổ và dưới đòn",
		latin: "Carotis, jugularis, subclavia",
		body: "Cảnh chung chia cảnh trong (não) và cảnh ngoài (mặt). Cảnh trong không có nhánh ở cổ. Tĩnh mạch cảnh trong nằm trong bao cảnh, cạnh động mạch. Dưới đòn đi sau xương đòn, liên quan đỉnh phổi — chấn thương xương đòn hoặc đặt catheter có thể đụng mạch hay màng phổi.",
		match: (n) => /carotid|jugular|subclavian/i.test(n)
	},
	{
		id: "circ-viscera",
		system: "circ",
		tab: "vessel",
		vi: "Mạch tạng bụng",
		latin: "Rami viscerales",
		body: "Thân tạng, mạc treo tràng trên và dưới, động mạch thận. Tĩnh mạch cửa gom máu tiêu hóa về gan, không đổ thẳng vào tĩnh mạch chủ. Tắc cửa làm tăng áp cửa — giãn tĩnh mạch thực quản là biến chứng giảng dạy, không thấy trên mô hình bình thường.",
		match: (n) => /renal artery|renal vein|mesenteric|coeliac|celiac|splenic artery|hepatic artery|portal/i.test(n)
	},
	{
		id: "circ-limb",
		system: "circ",
		tab: "vessel",
		vi: "Mạch chi",
		latin: "Vasa membri",
		body: "Đùi tiếp khoeo, rồi chày. Cánh tay: nách → cánh tay → quay và trụ. Tĩnh mạch hiển lớn là tĩnh mạch nông, hay dùng để lấy mạch ghép và cũng là đường huyết khối có thể đi vào tĩnh mạch sâu.",
		match: (n) => /femoral|popliteal|saphenous|brachial|radial artery|ulnar artery/i.test(n)
	},
	{
		id: "circ-cava",
		system: "circ",
		tab: "vessel",
		vi: "Tĩnh mạch chủ",
		latin: "Venae cavae",
		body: "Chủ trên gom nửa trên cơ thể về nhĩ phải. Chủ dưới gom bụng và hai chi dưới, đi sau gan, xuyên cơ hoành. Hệ azygos là đường nối dọc thành sau ngực, có thể dẫn lưu bù khi chủ dưới tắc.",
		match: (n) => /vena cava|azygos/i.test(n)
	},
	{
		id: "path-lad",
		system: "circ",
		tab: "path",
		vi: "Mẫu vành cấp",
		latin: "Syndroma coronarium acutum",
		body: "Đau thắt ngực kiểu đè, có thể lan tay trái, hàm, kèm khó thở, vã mồ hôi. Vùng liên thất trước gợi ý thành trước. Đây là mẫu để ôn, không phải kết luận từ mô hình hay từ một câu chuyện. Người đau ngực mới phải được thầy thuốc loại trừ thiếu máu cơ tim.",
		board: {
			see: "Đau ngực đè mới, vã mồ hôi, khó thở, hoặc đau tương đương ở người có yếu tố nguy cơ.",
			step: "Ôn vùng cấp máu: liên thất trước = thành trước; mũ = thành bên; vành phải = thành dưới ở người ưu thế phải.",
			flag: "Đau ngực mới kéo dài, ngất, hoặc tụt huyết áp là tình huống cấp cứu thật — gọi cấp cứu, không tự kết luận trên atlas."
		},
		match: (n) => /anterior interventricular|circumflex artery of heart|right coronary artery|left coronary artery/i.test(n)
	},
	{
		id: "path-as",
		system: "circ",
		tab: "path",
		vi: "Hẹp van động mạch chủ",
		latin: "Stenosis valvulae aortae",
		body: "Van chủ mở kém thì tâm thu. Bộ ba giảng dạy cổ điển: đau ngực, khó thở khi gắng sức, ngất khi gắng sức. Âm thổi tống máu ở đáy tim, lan cổ. Mô hình là van bình thường để nhớ lá van — không thấy được mức hẹp.",
		board: {
			see: "Người lớn tuổi, đau ngực hoặc ngất khi gắng sức, mạch nhỏ.",
			step: "Nhìn ba lá van chủ (lá vành trái, lá vành phải, lá không vành) và đường ra thất trái.",
			flag: "Ngất khi gắng sức ở người nghi hẹp van chủ cần khám tim, không phải chỉ nghỉ ngơi cho đỡ."
		},
		match: (n) => /coronary leaflet|non-coronary leaflet|aortic_valve/i.test(n)
	},
	{
		id: "path-mr",
		system: "circ",
		tab: "path",
		vi: "Hở van hai lá",
		latin: "Insufficientia valvulae mitralis",
		body: "Van hai lá không khép kín thì tâm thu, máu phụt ngược về nhĩ trái. Mệt, khó thở khi nằm, có thể rung nhĩ về sau. Lá trước và lá sau, cùng cơ nhú, là đơn vị chức năng. Đứt cơ nhú sau nhồi máu là biến chứng nặng.",
		board: {
			see: "Khó thở khi gắng sức hoặc khi nằm, tiếng thổi tâm thu ở mỏm, lan nách — mẫu sách giáo khoa.",
			step: "Xem lá van nhĩ–thất trái và cơ nhú thất trái. Thất trái giãn là hệ quả lâu dài, không có trên mô hình.",
			flag: "Phù phổi cấp (khó thở đột ngột, không nằm được) là cấp cứu, không chờ ôn xong bài."
		},
		match: (n) => /left atrioventricular|mitral_valve|papillary muscle of left ventricle/i.test(n)
	},
	{
		id: "path-pe",
		system: "circ",
		tab: "path",
		vi: "Thuyên tắc phổi",
		latin: "Embolia pulmonalis",
		body: "Huyết khối, thường từ tĩnh mạch sâu chi dưới, theo chủ dưới lên nhĩ phải, thất phải, rồi mắc ở thân hoặc nhánh động mạch phổi. Khó thở đột ngột, đau ngực kiểu màng phổi, tim nhanh. Atlas chỉ chỉ chỗ mạch bị mắc, không thấy cục máu.",
		board: {
			see: "Khó thở và đau ngực đột ngột, nhất là sau bất động, mổ, ung thư, hoặc chân một bên sưng.",
			step: "Đi đường máu: tĩnh mạch đùi / khoeo → chủ dưới → tim phải → thân động mạch phổi.",
			flag: "Tụt huyết áp hoặc ngất trong mẫu này là tắc lớn — cấp cứu. Chẩn đoán bằng khám và chụp, không bằng mô hình."
		},
		match: (n) => /pulmonary trunk|pulmonary artery|lobar artery of .+lung|femoral vein|popliteal vein/i.test(n)
	},
	{
		id: "path-aaa",
		system: "circ",
		tab: "path",
		vi: "Phình động mạch chủ bụng",
		latin: "Aneurysma aortae abdominalis",
		body: "Chủ bụng giãn khu trú, thường dưới động mạch thận. Nhiều người không đau. Khối đập theo nhịp ở bụng là mẫu khám, dễ nhầm mạch đập bình thường ở người gầy. Vỡ: đau bụng hoặc lưng đột ngột, choáng.",
		board: {
			see: "Nam lớn tuổi hút thuốc, hoặc đau bụng–lưng đột ngột không giải thích được.",
			step: "Chỉ đoạn chủ bụng và chỗ chia chậu. Đường kính thật đo bằng siêu âm, không đo trên atlas.",
			flag: "Đau bụng dữ dội và choáng ở người đã biết phình chủ là cấp cứu ngoại khoa."
		},
		match: (n) => /abdominal aorta|common iliac artery/i.test(n)
	},
	{
		id: "path-dvt",
		system: "circ",
		tab: "path",
		vi: "Huyết khối tĩnh mạch sâu",
		latin: "Thrombosis venosa profunda",
		body: "Thường tĩnh mạch đùi hoặc khoeo: chân một bên sưng, đau, ấm. Không phải mọi cơn chuột rút đều là huyết khối, và huyết khối có thể ít triệu chứng. Nguy cơ giảng dạy: bất động, sau mổ, có thai, ung thư, thuốc tránh thai cộng hút thuốc. Biến chứng đáng sợ là thuyên tắc phổi.",
		board: {
			see: "Một chân sưng mới, không do chấn thương rõ.",
			step: "Nhìn trục tĩnh mạch đùi–khoeo–chậu và hiển lớn như đường nông có thể thông sang sâu.",
			flag: "Kèm khó thở đột ngột thì nghĩ thêm thuyên tắc phổi và đi cấp cứu."
		},
		match: (n) => /femoral vein|popliteal vein|iliac vein|great saphenous|common iliac/i.test(n)
	},
	{
		id: "resp-lobes",
		system: "resp",
		tab: "lung",
		vi: "Các thùy phổi",
		latin: "Lobi pulmonis",
		body: "Phổi phải ba thùy: trên, giữa, dưới. Phổi trái hai thùy: trên (có lưỡi) và dưới. Rãnh chếch và rãnh ngang là ranh giới. Thùy dưới nghe rõ nhất ở lưng. Viêm phổi thùy thường đóng một thùy, khác viêm phế quản.",
		match: (n) => /upper_lobe|lower_lobe|middle_lobe|superior lobe of|inferior lobe of|middle lobe of/i.test(n)
	},
	{
		id: "resp-seg",
		system: "resp",
		tab: "lung",
		vi: "Phân thùy phổi",
		latin: "Segmenta bronchopulmonalia",
		body: "Mỗi phân thùy có phế quản và mạch riêng, nên có thể viêm hoặc xẹp riêng, và phẫu thuật có thể cắt theo phân thùy. Phải: trên có đỉnh, sau, trước; giữa có ngoài và trong; dưới có các đáy và phân thùy trên. Trái không có thùy giữa — phần lưỡi thay vai trò đó. Bật Chi tiết để thấy hết các phân thùy.",
		match: (n) => /bronchopulmonary_segment|segmental bronchus/i.test(n)
	},
	{
		id: "resp-trachea",
		system: "resp",
		tab: "airway",
		vi: "Khí quản và carina",
		latin: "Trachea et carina",
		body: "Khí quản từ sụn nhẫn xuống carina, chỗ chia hai phế quản gốc. Thành sau là cơ, các vòng sụn không khép kín — kim mở khí quản nhằm đường giữa, tránh mạch cảnh hai bên. Carina là mốc nội soi. Lệch khí quản là dấu hiệu gián tiếp tràn khí hoặc xẹp phổi một bên, không thấy được khi mô hình đang bình thường.",
		match: (n) => /trachea|carina|tracheal/i.test(n)
	},
	{
		id: "resp-bronchi",
		system: "resp",
		tab: "airway",
		vi: "Phế quản gốc",
		latin: "Bronchi principales",
		body: "Phế quản phải ngắn hơn, rộng hơn và dốc hơn phế quản trái. Dị vật hít vào thường rơi về phổi phải. Phế quản trái dài và nằm ngang hơn, bắt chéo qua thực quản và cung động mạch chủ. Phế quản trung gian phải dẫn xuống thùy giữa và thùy dưới.",
		match: (n) => /main_bronchus|main bronchus|intermediate bronchus|lobar_bronchus|lobar bronchus/i.test(n)
	},
	{
		id: "resp-larynx",
		system: "resp",
		tab: "airway",
		vi: "Sụn thanh quản",
		latin: "Cartilagines laryngis",
		body: "Sụn giáp (lồi thanh quản), sụn nhẫn (vòng nguyên dưới dây thanh), sụn nắp, sụn phễu. Mở khí quản kinh điển đi qua màng nhẫn–giáp hoặc dưới sụn nhẫn tùy kỹ thuật — chỉ để nhớ mốc, không phải hướng dẫn thủ thuật. Tắc thanh quản: nói khàn, thở rít thì hít vào.",
		match: (n) => /cricoid|epiglot|arytenoid|corniculate|thyroid cartilage|thyroid_cartilage/i.test(n)
	},
	{
		id: "path-ptx",
		system: "resp",
		tab: "path",
		vi: "Tràn khí màng phổi",
		latin: "Pneumothorax",
		body: "Khí vào khoang màng phổi, phổi bên đó xẹp. Đau ngực đột ngột một bên, khó thở, rì rào giảm. Tràn khí áp lực: khí quản bị đẩy sang bên đối diện, tĩnh mạch cổ nổi, tụt huyết áp. Mô hình là phổi nở bình thường — dùng để nhớ bên nào là phổi và chỗ khí quản, không mô phỏng xẹp.",
		board: {
			see: "Đau ngực đột ngột một bên và khó thở, nhất là người trẻ cao gầy hoặc sau chấn thương ngực.",
			step: "Xem khí quản ở đường giữa và hai phổi. Trong áp lực, khí quản lệch khỏi bên tràn — mẫu này phải thuộc lòng.",
			flag: "Khó thở tăng nhanh, tụt huyết áp: cấp cứu. Không chờ chụp nếu người bệnh xấu đi trên đường."
		},
		match: (n) => /trachea|upper_lobe|lower_lobe|middle_lobe|lungs_/i.test(n)
	},
	{
		id: "path-pna",
		system: "resp",
		tab: "path",
		vi: "Viêm phổi thùy",
		latin: "Pneumonia lobaris",
		body: "Nhu mô một thùy đặc lại: sốt, ho đờm, đau kiểu màng phổi, gõ đục và rung thanh tăng đúng thùy đó. Thùy dưới dễ bỏ sót nếu chỉ nghe mặt trước. Phân thùy cho biết vùng hẹp hơn thùy khi đọc phim hoặc nội soi. Atlas không thay phim ngực.",
		board: {
			see: "Sốt, ho, đau ngực một bên, thở nhanh.",
			step: "Chọn thùy nghi ngờ. Thùy dưới: nghe lưng. Thùy giữa phải: nghe cạnh ức phải.",
			flag: "Thở nhanh, rối loạn ý thức, môi tím hoặc huyết áp thấp ở người nghi viêm phổi là nặng — cần cơ sở y tế."
		},
		match: (n) => /upper_lobe|lower_lobe|middle_lobe|superior lobe of|inferior lobe of|middle lobe of/i.test(n)
	},
	{
		id: "path-fb",
		system: "resp",
		tab: "path",
		vi: "Dị vật đường thở",
		latin: "Corpus alienum bronchi",
		body: "Hít sặc: ho sặc, thở rít, hoặc sau đó viêm phổi tái phát cùng một chỗ. Vì phế quản phải dốc hơn, dị vật thường sang phải. Trẻ em và người răng giả, say, là nhóm giảng dạy kinh điển. Gắp dị vật là việc của nội soi, không làm tại nhà.",
		board: {
			see: "Ho sặc khi đang ăn, sau đó khàn hoặc thở rít; hoặc viêm phổi lặp lại một bên.",
			step: "So phế quản gốc phải (ngắn, dốc) với phế quản gốc trái.",
			flag: "Không nói được, không ho được, tím: tắc hoàn toàn — cấp cứu theo nghiệm pháp khai thông đang được dạy tại chỗ, không theo video."
		},
		match: (n) => /right_main_bronchus|right main bronchus|trachea|carina|left_main_bronchus|left main bronchus/i.test(n)
	},
	{
		id: "path-asthma",
		system: "resp",
		tab: "path",
		vi: "Cơn hen",
		latin: "Asthma bronchiale",
		body: "Đường thở co thắt, phù và nhiều đờm — chức năng, không phải dị dạng nhìn thấy trên atlas người bình thường. Thở ra kéo dài, ran rít lan tỏa hai phổi. Cây phế quản trên mô hình là cỡ tham chiếu lúc không co thắt.",
		board: {
			see: "Khò khè tái diễn, khó thở ra, ho đêm hoặc sau gắng sức, dị ứng.",
			step: "Đi từ khí quản xuống phế quản gốc rồi phế quản thùy — chỗ co thắt là phế quản nhỏ, ngoài độ phân giải này.",
			flag: "Nói cụt, co kéo cơ hô hấp, im phổi (hết rít vì không còn khí) là cơn nặng — cấp cứu."
		},
		match: (n) => /trachea|bronchus|bronchi/i.test(n)
	},
	{
		id: "path-eff",
		system: "resp",
		tab: "path",
		vi: "Tràn dịch màng phổi",
		latin: "Hydrothorax",
		body: "Dịch tụ ở khoang màng phổi, thường đáy, làm phổi bên đó kém nở. Gõ đục vùng thấp, rì rào giảm, rung thanh giảm — khác viêm phổi đặc (rung thanh tăng). Dịch có thể là viêm, máu, mủ hoặc dịch thấm. Chọc dịch là việc có chỉ định, không làm theo atlas.",
		board: {
			see: "Khó thở tăng dần, đau ngực âm ỉ một bên, vùng thấp gõ đục.",
			step: "Nhìn thùy dưới hai bên — chỗ dịch thường đọng trước khi lan lên.",
			flag: "Khó thở nhiều hoặc dịch sau chấn thương (máu) cần cơ sở y tế, không chọc thử ở nhà."
		},
		match: (n) => /lower_lobe|inferior lobe of|middle_lobe|middle lobe of/i.test(n)
	}
];
var QUIZ_CIRC = [
	{
		q: "Động mạch liên thất trước (LAD) chủ yếu nuôi vùng nào?",
		options: [
			"Thành trước thất trái và phần lớn vách",
			"Thùy dưới phổi phải",
			"Thận trái",
			"Bàn chân"
		],
		a: 0,
		topicId: "path-lad",
		explain: "Liên thất trước đi ở rãnh liên thất trước. Tắc nhánh này là mẫu nhồi máu thành trước."
	},
	{
		q: "Vì sao atlas tô động mạch phổi màu xanh, không phải đỏ?",
		options: [
			"Vì máu trong động mạch phổi nghèo oxy",
			"Vì đó là tĩnh mạch",
			"Vì phổi không có mạch",
			"Vì mô hình bị lỗi màu"
		],
		a: 0,
		topicId: "circ-pulm",
		explain: "Động mạch phổi mang máu nghèo oxy từ thất phải ra phổi. Tĩnh mạch phổi mới giàu oxy."
	},
	{
		q: "Huyết khối tĩnh mạch chân muốn lên phổi thì đi qua buồng tim nào trước?",
		options: [
			"Tim phải",
			"Chỉ thất trái",
			"Chỉ nhĩ trái",
			"Xoang vành"
		],
		a: 0,
		topicId: "path-pe",
		explain: "Chủ dưới đổ vào nhĩ phải, rồi thất phải, rồi thân động mạch phổi."
	},
	{
		q: "Van nào mở trong thì tâm thu để máu ra động mạch chủ?",
		options: [
			"Van động mạch chủ",
			"Van hai lá",
			"Van ba lá",
			"Van tĩnh mạch chủ"
		],
		a: 0,
		topicId: "circ-valves",
		explain: "Tâm thu thất: van nhĩ–thất đóng, van tổ chim của chủ và của phổi mở."
	},
	{
		q: "Tĩnh mạch cửa đổ máu về đâu?",
		options: [
			"Gan",
			"Thẳng vào nhĩ phải",
			"Thẳng vào phổi",
			"Động mạch thận"
		],
		a: 0,
		topicId: "circ-viscera",
		explain: "Cửa gom máu ruột và lách về gan. Chủ dưới mới là đường hệ thống về tim."
	},
	{
		q: "Bộ ba cổ điển của hẹp van động mạch chủ gồm đau ngực, khó thở và…",
		options: [
			"Ngất khi gắng sức",
			"Ho ra máu chắc chắn",
			"Sốt cao mỗi chiều",
			"Đau một ngón chân"
		],
		a: 0,
		topicId: "path-as",
		explain: "Ngất gắng sức là cờ đỏ của hẹp van chủ. Chẩn đoán bằng khám và siêu âm tim, không bằng atlas."
	}
];
var QUIZ_RESP = [
	{
		q: "Phổi phải có mấy thùy?",
		options: [
			"Ba",
			"Hai",
			"Một",
			"Năm"
		],
		a: 0,
		topicId: "resp-lobes",
		explain: "Phải: trên, giữa, dưới. Trái: trên và dưới. Trái không có thùy giữa."
	},
	{
		q: "Dị vật hít vào thường rơi vào bên nào, và vì sao?",
		options: [
			"Phổi phải, vì phế quản phải ngắn, rộng và dốc hơn",
			"Phổi trái, vì phế quản trái thẳng đứng",
			"Luôn mắc ở thanh quản",
			"Luôn xuống thùy giữa trái"
		],
		a: 0,
		topicId: "path-fb",
		explain: "Phế quản gốc phải hợp với khí quản một góc dốc hơn. Không có thùy giữa bên trái."
	},
	{
		q: "Tràn khí màng phổi áp lực đẩy khí quản về phía nào?",
		options: [
			"Sang bên đối diện với bên tràn khí",
			"Về phía bên tràn khí",
			"Không bao giờ lệch",
			"Xuống cơ hoành"
		],
		a: 0,
		topicId: "path-ptx",
		explain: "Áp lực bên tràn khí đẩy trung thất sang bên lành. Đây là cấp cứu."
	},
	{
		q: "Phân thùy phổi nghĩa là gì trên atlas này?",
		options: [
			"Vùng nhu mô có phế quản và mạch riêng",
			"Một xương sườn",
			"Một buồng tim",
			"Một van tĩnh mạch"
		],
		a: 0,
		topicId: "resp-seg",
		explain: "Cắt phân thùy được vì ranh giới mạch–phế quản. Bật Chi tiết để hiện các mảnh này."
	},
	{
		q: "Gõ đục và rung thanh giảm vùng thấp một bên hợp với mẫu nào hơn?",
		options: [
			"Tràn dịch màng phổi",
			"Hen đang khò khè hai phổi",
			"Hẹp van chủ",
			"Gãy xương đùi"
		],
		a: 0,
		topicId: "path-eff",
		explain: "Dịch làm đầy khoang màng phổi nên rung thanh giảm. Phổi đặc của viêm phổi thường làm rung thanh tăng."
	},
	{
		q: "Vì sao cơn hen không nhìn thấy là một chỗ gãy trên mô hình?",
		options: [
			"Vì hen là co thắt chức năng của phế quản nhỏ, mô hình là đường thở bình thường",
			"Vì phổi không liên quan hen",
			"Vì hen chỉ ở xương sườn",
			"Vì mô hình thiếu phổi trái"
		],
		a: 0,
		topicId: "path-asthma",
		explain: "Atlas chỉ hình dạng lúc không co thắt. Im phổi trong cơn là dấu nặng, không phải hết bệnh."
	}
];
var PHRASE = [
	[/anterior interventricular artery/i, "động mạch liên thất trước"],
	[/circumflex artery of heart/i, "động mạch mũ"],
	[/right coronary artery/i, "động mạch vành phải"],
	[/left coronary artery/i, "động mạch vành trái"],
	[/coronary sinus/i, "xoang vành"],
	[/great cardiac vein/i, "tĩnh mạch tim lớn"],
	[/middle cardiac vein/i, "tĩnh mạch tim giữa"],
	[/pulmonary trunk/i, "thân động mạch phổi"],
	[/bifurcation of pulmonary trunk/i, "chỗ chia thân động mạch phổi"],
	[/left pulmonary artery/i, "động mạch phổi trái"],
	[/right pulmonary artery/i, "động mạch phổi phải"],
	[/superior vena cava/i, "tĩnh mạch chủ trên"],
	[/inferior vena cava/i, "tĩnh mạch chủ dưới"],
	[/hepatic portal vein/i, "tĩnh mạch cửa"],
	[/ascending aorta/i, "động mạch chủ lên"],
	[/thoracic aorta/i, "động mạch chủ ngực"],
	[/abdominal aorta/i, "động mạch chủ bụng"],
	[/aortic arch/i, "cung động mạch chủ"],
	[/brachiocephalic trunk/i, "thân cánh tay-đầu"],
	[/common carotid artery/i, "động mạch cảnh chung"],
	[/internal carotid artery/i, "động mạch cảnh trong"],
	[/external carotid artery/i, "động mạch cảnh ngoài"],
	[/internal jugular vein/i, "tĩnh mạch cảnh trong"],
	[/external jugular vein/i, "tĩnh mạch cảnh ngoài"],
	[/subclavian artery/i, "động mạch dưới đòn"],
	[/subclavian vein/i, "tĩnh mạch dưới đòn"],
	[/superior mesenteric artery/i, "động mạch mạc treo tràng trên"],
	[/inferior mesenteric artery/i, "động mạch mạc treo tràng dưới"],
	[/superior mesenteric vein/i, "tĩnh mạch mạc treo tràng trên"],
	[/femoral artery/i, "động mạch đùi"],
	[/deep femoral artery/i, "động mạch đùi sâu"],
	[/femoral vein/i, "tĩnh mạch đùi"],
	[/great saphenous vein/i, "tĩnh mạch hiển lớn"],
	[/small saphenous vein/i, "tĩnh mạch hiển bé"],
	[/popliteal artery/i, "động mạch khoeo"],
	[/popliteal vein/i, "tĩnh mạch khoeo"],
	[/renal artery/i, "động mạch thận"],
	[/renal vein/i, "tĩnh mạch thận"],
	[/left atrium/i, "tâm nhĩ trái"],
	[/right atrium/i, "tâm nhĩ phải"],
	[/left ventricle/i, "tâm thất trái"],
	[/right ventricle/i, "tâm thất phải"],
	[/papillary muscle/i, "cơ nhú"],
	[/left atrioventricular valve/i, "van hai lá"],
	[/right atrioventricular valve/i, "van ba lá"],
	[/pulmonary valve/i, "van động mạch phổi"],
	[/superior lobe of right lung/i, "thùy trên phổi phải"],
	[/superior lobe of left lung/i, "thùy trên phổi trái"],
	[/inferior lobe of right lung/i, "thùy dưới phổi phải"],
	[/inferior lobe of left lung/i, "thùy dưới phổi trái"],
	[/middle lobe of right lung/i, "thùy giữa phổi phải"],
	[/right main bronchus/i, "phế quản gốc phải"],
	[/left main bronchus/i, "phế quản gốc trái"],
	[/intermediate bronchus/i, "phế quản trung gian phải"],
	[/lungs r upper lobe/i, "thùy trên phổi phải"],
	[/lungs l upper lobe/i, "thùy trên phổi trái"],
	[/lungs r lower lobe/i, "thùy dưới phổi phải"],
	[/lungs l lower lobe/i, "thùy dưới phổi trái"],
	[/lungs r middle lobe/i, "thùy giữa phổi phải"],
	[/right main bronchus/i, "phế quản gốc phải"],
	[/left main bronchus/i, "phế quản gốc trái"],
	[/thyroid cartilage/i, "sụn giáp"],
	[/cricoid cartilage/i, "sụn nhẫn"],
	[/epiglottic cartilage/i, "sụn nắp"],
	[/arytenoid cartilage/i, "sụn phễu"],
	[/corniculate cartilage/i, "sụn sừng"],
	[/tracheal cartilage/i, "sụn khí quản"],
	[/bronchial cartilage/i, "sụn phế quản"]
];
function tidy(raw) {
	return raw.replace(/^VH_[MF]_/i, "").replace(/\.(l|r)$/i, "").replace(/[_.]+/g, " ").replace(/\s+/g, " ").trim();
}
function capitalize(text) {
	if (!text) return text;
	return text.charAt(0).toLocaleUpperCase("vi") + text.slice(1);
}
function labelSystem(raw) {
	const latin = tidy(raw);
	let best = "";
	let vi = latin;
	for (const [re, phrase] of PHRASE) {
		const hit = latin.match(re)?.[0] ?? raw.match(re)?.[0] ?? "";
		if (hit.length > best.length) {
			best = hit;
			vi = phrase;
		}
	}
	if (!best) vi = latin.replace(/segmental artery/gi, "động mạch phân thùy").replace(/segmental vein/gi, "tĩnh mạch phân thùy").replace(/segmental bronchus/gi, "phế quản phân thùy").replace(/lobar artery/gi, "động mạch thùy").replace(/lobar bronchus/gi, "phế quản thùy").replace(/bronchopulmonary segment/gi, "phân thùy phổi").replace(/artery/gi, "động mạch").replace(/vein/gi, "tĩnh mạch").replace(/bronchus/gi, "phế quản").replace(/trachea/gi, "khí quản").replace(/ of right lung/gi, " của phổi phải").replace(/ of left lung/gi, " của phổi trái").replace(/\bright\b/gi, "phải").replace(/\bleft\b/gi, "trái").replace(/\bsuperior\b/gi, "trên").replace(/\binferior\b/gi, "dưới").replace(/\banterior\b/gi, "trước").replace(/\bposterior\b/gi, "sau").replace(/\bmedial\b/gi, "trong").replace(/\blateral\b/gi, "ngoài").replace(/\bupper\b/gi, "trên").replace(/\blower\b/gi, "dưới").replace(/\bmiddle\b/gi, "giữa").replace(/\bapical\b/gi, "đỉnh").replace(/\bbasal\b/gi, "đáy");
	return {
		vi: capitalize(vi),
		latin
	};
}
function isFine(name) {
	return /segmental|tertiary|lingular|basal|bronchopulmonary_segment|septal branch|perforat/i.test(name);
}
function isJunkName(name) {
	return !name || /\?/.test(name) || /^mesh(\.|$)/i.test(name);
}
function toneOf(name) {
	const n = name.toLowerCase();
	if (/leaflet|atrioventricular valve|_valve\b|mitral_valve|tricuspid_valve|aortic_valve|pulmonary_valve/.test(n)) return "valve";
	if (/pulmonary vein|vein of (the )?(right|left) lung|vein of right lung|vein of left lung/.test(n)) return "pulmVein";
	if (/pulmonary artery|pulmonary trunk|lobar artery|segmental artery of .+lung|lingular artery|bifurcation of pulmonary/.test(n)) return "pulmArtery";
	if (/vein|sinus|cava|azygos|saphenous|portal/.test(n)) return "vein";
	if (/artery|aorta|aortic arch|brachiocephalic trunk|\btrunk\b/.test(n)) return "artery";
	if (/atrium|ventricle|papillary|cardiac chamber|septum|vh_m_heart\b/.test(n)) return "heart";
	if (/bronchopulmonary_segment|upper_lobe|lower_lobe|middle_lobe|lungs_|pleura|\blobe of\b/.test(n)) return "lung";
	if (/bronch|trache|carina|cartilage|epiglot|arytenoid|cricoid|corniculate/.test(n)) return "air";
	if (/lung|lobe|hilum/.test(n)) return "lung";
	return "other";
}
var ribN = {
	first: "1",
	second: "2",
	third: "3",
	fourth: "4",
	fifth: "5",
	sixth: "6",
	seventh: "7",
	eighth: "8",
	ninth: "9",
	tenth: "10",
	eleventh: "11",
	twelfth: "12"
};
var TOPICS = [...[
	{
		id: "bone-skull",
		tab: "bone",
		vi: "Hộp sọ",
		latin: "Cranium",
		body: "Hộp sọ gồm sọ não (trán, đỉnh, thái dương, chẩm, bướm, sàng) và khối xương mặt. Hộp sọ bảo vệ não, tạo ổ mắt, hốc mũi và khớp với hàm dưới. Gãy xương sọ hoặc tụ máu nội sọ là cấp cứu — atlas này chỉ để nhận diện xương.",
		match: (n) => /frontal|parietal|occipital|temporal|sphenoid|ethmoid|zygomatic|nasal bone|maxilla|lacrimal|palatine|inferior nasal|vomer/i.test(n)
	},
	{
		id: "bone-mandible",
		tab: "bone",
		vi: "Xương hàm dưới",
		latin: "Mandibula",
		body: "Xương lẻ, di động, khớp với xương thái dương tại khớp thái dương–hàm. Nơi bám cơ cắn và cơ thái dương. Trật khớp há miệng hoặc gãy góc hàm hay gặp sau chấn thương.",
		match: (n) => /mandible/i.test(n)
	},
	{
		id: "bone-cspine",
		tab: "bone",
		vi: "Cột sống cổ",
		latin: "Vertebrae C1–C7",
		body: "Bảy đốt. C1 (đốt đội) mang sọ, C2 (đốt trục) có mỏm nha cho phép quay đầu. Đĩa đệm và lỗ liên hợp hẹp dần theo tuổi, dễ chèn rễ C5–C7. Sau chấn thương cổ: không xoay người, cố định và đi cấp cứu.",
		match: (n) => /atlas|axis|vertebra c/i.test(n)
	},
	{
		id: "bone-tspine",
		tab: "bone",
		vi: "Cột sống ngực",
		latin: "Vertebrae T1–T12",
		body: "Mười hai đốt khớp với xương sườn, tạo lồng ngực. Gù sinh lý. Gãy lún đốt ngực ở người loãng xương có thể chỉ là đau lưng mới, không cần ngã mạnh.",
		match: (n) => /vertebra t/i.test(n)
	},
	{
		id: "bone-lspine",
		tab: "bone",
		vi: "Cột sống thắt lưng",
		latin: "Vertebrae L1–L5",
		body: "Năm đốt chịu lực thân mình. Đĩa L4–L5 và L5–S1 thoát vị nhiều nhất, có thể đau lan theo rễ thần kinh xuống chân. Đau lưng cơ năng phổ biến hơn thoát vị — không tự kết luận chỉ vì đau.",
		match: (n) => /vertebra l/i.test(n)
	},
	{
		id: "bone-ribs",
		tab: "bone",
		vi: "Lồng ngực",
		latin: "Costae et sternum",
		body: "Mười hai đôi xương sườn, xương ức (cán, thân, mũi kiếm) và sụn sườn. Sườn 1–7 gắn ức bằng sụn riêng; 8–10 gắn cung sụn; 11–12 sườn cụt. Gãy sườn gây đau khi hít sâu; nhiều sườn gãy có thể giảm thông khí.",
		match: (n) => /rib|sternum|manubrium|xiphoid|costal cartilage/i.test(n)
	},
	{
		id: "bone-clavicle",
		tab: "bone",
		vi: "Xương đòn",
		latin: "Clavicula",
		body: "Xương dài hình chữ S, nối ức với mỏm cùng vai. Là xương gãy thường gặp khi ngã chống tay hoặc va đập vai. Nổi gồ dưới da, vai sệ xuống.",
		match: (n) => /^clavicle/i.test(n)
	},
	{
		id: "bone-scapula",
		tab: "bone",
		vi: "Xương bả vai",
		latin: "Scapula",
		body: "Xương dẹt sau ngực, có ổ chảo khớp với chỏm xương cánh tay, mỏm cùng vai và mỏm quạ. Hố trên gai và dưới gai là nơi xuất phát chóp xoay.",
		match: (n) => /^scapula/i.test(n)
	},
	{
		id: "bone-humerus",
		tab: "bone",
		vi: "Xương cánh tay",
		latin: "Humerus",
		body: "Xương dài của cánh tay. Chỏm cầu khớp vai; đầu dưới có ròng rọc và lồi cầu khớp khuỷu, cùng lồi cầu ngoài — nơi bám nhóm duỗi cổ tay. Gãy thân có thể tổn thương thần kinh quay.",
		match: (n) => /^humerus/i.test(n)
	},
	{
		id: "bone-forearm",
		tab: "bone",
		vi: "Xương quay và xương trụ",
		latin: "Radius et ulna",
		body: "Xương trụ vững phía khuỷu (mỏm khuỷu), xương quay vững phía cổ tay và xoay được quanh trụ khi sấp–ngửa. Ngã chống bàn tay hay gãy đầu dưới xương quay (kiểu Colles): biến dạng lưng đĩa úp.",
		match: (n) => /^(radius|ulna)/i.test(n)
	},
	{
		id: "bone-hip",
		tab: "bone",
		vi: "Xương chậu",
		latin: "Os coxae",
		body: "Mỗi bên do xương chậu hông, ngồi và mu hợp lại, tạo ổ cối nhận chỏm xương đùi. Vòng chậu bảo vệ tạng và truyền lực từ thân xuống chi. Gãy vòng chậu sau chấn thương năng lượng cao là nặng.",
		match: (n) => /hip bone|ilium|ischium|pubis/i.test(n)
	},
	{
		id: "bone-femur",
		tab: "bone",
		vi: "Xương đùi",
		latin: "Femur",
		body: "Xương dài nhất. Cổ xương đùi nối chỏm với thân, là điểm yếu ở người cao tuổi loãng xương. Gãy cổ xương đùi: chân ngắn và xoay ngoài, không đứng được — đây là cấp cứu chỉnh hình, không phải đau khớp thông thường.",
		match: (n) => /^femur/i.test(n)
	},
	{
		id: "bone-patella",
		tab: "bone",
		vi: "Xương bánh chè",
		latin: "Patella",
		body: "Xương vừng trong gân cơ tứ đầu, tăng đòn bẩy duỗi gối và bảo vệ mặt trước khớp. Trật bánh chè thường lệch ra ngoài khi xoay người, gối gấp.",
		match: (n) => /^patella/i.test(n)
	},
	{
		id: "bone-leg",
		tab: "bone",
		vi: "Xương chày và xương mác",
		latin: "Tibia et fibula",
		body: "Xương chày chịu lực chính, mặt trên là mâm chày khớp với lồi cầu đùi. Xương mác mảnh, phía ngoài, cùng chày tạo ổ mắt cá cho xương sên. Gãy mâm chày ảnh hưởng mặt khớp, dễ thoái hóa sau này.",
		match: (n) => /^(tibia|fibula)/i.test(n)
	},
	{
		id: "bone-foot",
		tab: "bone",
		vi: "Xương sên và xương gót",
		latin: "Talus et calcaneus",
		body: "Xương sên truyền lực từ cẳng chân xuống bàn chân, không có chỗ bám cơ. Xương gót là xương lớn nhất bàn chân, nơi bám gân gót. Bong gân cổ chân chủ yếu đứt một phần dây chằng mác–sên trước, không phải gãy xương — nhưng cần loại trừ gãy nếu không chịu được lực.",
		match: (n) => /^(talus|calcaneus)/i.test(n)
	},
	{
		id: "muscle-pec",
		tab: "muscle",
		vi: "Cơ ngực lớn",
		latin: "M. pectoralis major",
		body: "Ba phần: đòn, ức–sườn và bụng. Khép và xoay trong cánh tay, phần đòn còn gấp vai. Rách gân chỗ bám cánh tay gặp ở người tập đẩy tạ nặng: bầm ngực, mất nếp nách trước.",
		match: (n) => /pectoralis major/i.test(n)
	},
	{
		id: "muscle-delt",
		tab: "muscle",
		vi: "Cơ delta",
		latin: "M. deltoideus",
		body: "Ba bó: đòn (gấp), cùng vai (dạng), gai vai (duỗi). Là cơ dạng vai chính sau khi chóp xoay đã khởi động. Tiêm hoặc chấn thương thần kinh mũ làm teo delta, khó dạng vai.",
		match: (n) => /deltoid/i.test(n)
	},
	{
		id: "muscle-biceps",
		tab: "muscle",
		vi: "Cơ nhị đầu cánh tay",
		latin: "M. biceps brachii",
		body: "Đầu dài và đầu ngắn. Gấp khuỷu khi bàn tay ngửa, và ngửa cẳng tay. Đầu dài góp phần giữ chỏm xương cánh tay. Đứt đầu dài: bóng cơ tụ xuống cánh tay, thường ở người lớn tuổi hoặc kéo nặng.",
		match: (n) => /biceps brachii/i.test(n)
	},
	{
		id: "muscle-triceps",
		tab: "muscle",
		vi: "Cơ tam đầu cánh tay",
		latin: "M. triceps brachii",
		body: "Ba đầu (dài, ngoài, trong) hợp một gân bám mỏm khuỷu. Là cơ duỗi khuỷu chính. Đứt gân: không duỗi được khuỷu chống trọng lực.",
		match: (n) => /triceps brachii/i.test(n)
	},
	{
		id: "muscle-cuff",
		tab: "muscle",
		vi: "Chóp xoay",
		latin: "Cuffia rotatorum",
		body: "Bốn cơ: trên gai, dưới gai, tròn bé và dưới vai. Ép chỏm vào ổ chảo và xoay vai. Cơ trên gai đi trong khoảng hẹp dưới mỏm cùng vai nên hay viêm gân và rách. Đau khi dạng tay ngang vai, đau đêm nằm nghiêng bên đó.",
		match: (n) => /supraspinatus|infraspinatus|teres minor|subscapularis/i.test(n)
	},
	{
		id: "muscle-trap",
		tab: "muscle",
		vi: "Cơ thang",
		latin: "M. trapezius",
		body: "Phần xuống (nâng vai), ngang (kéo xương bả) và lên (hạ xương bả, xoay ổ chảo lên). Thường căng khi ngồi cúi lâu. Liệt thần kinh phụ làm vai sệ, khó dang tay qua đầu.",
		match: (n) => /trapezius/i.test(n)
	},
	{
		id: "muscle-lat",
		tab: "muscle",
		vi: "Cơ lưng rộng",
		latin: "M. latissimus dorsi",
		body: "Bám từ mạc ngực-thắt lưng và mào chậu, kéo lên rãnh nhị đầu xương cánh tay. Duỗi, khép và xoay trong vai. Là cơ kéo người lên khi bám xà.",
		match: (n) => /latissimus dorsi/i.test(n)
	},
	{
		id: "muscle-quad",
		tab: "muscle",
		vi: "Cơ tứ đầu đùi",
		latin: "M. quadriceps femoris",
		body: "Bốn đầu: thẳng đùi, rộng ngoài, rộng trong, rộng giữa. Hợp gân qua bánh chè xuống lồi củ chày. Duỗi gối; thẳng đùi còn gấp háng. Teo rộng trong làm bánh chè dễ lệch ngoài.",
		match: (n) => /rectus femoris|vastus lateralis|vastus medialis|vastus intermedius|quadriceps/i.test(n)
	},
	{
		id: "muscle-ham",
		tab: "muscle",
		vi: "Cơ hamstring",
		latin: "Mm. ischiocrurales",
		body: "Nhị đầu đùi, bán gân và bán mạc. Gấp gối và duỗi háng. Căng hoặc rách khi chạy nước rút: đau mặt sau đùi, bầm muộn. Khác với đau rễ thần kinh lan từ lưng.",
		match: (n) => /biceps femoris|semitendinosus|semimembranosus/i.test(n)
	},
	{
		id: "muscle-calf",
		tab: "muscle",
		vi: "Cơ sinh đôi và cơ dép",
		latin: "M. gastrocnemius et soleus",
		body: "Sinh đôi có hai đầu, bắt từ lồi cầu đùi, nên gấp gối và gập lòng cổ chân. Cơ dép nằm sâu, chỉ gập lòng cổ chân, là bơm tĩnh mạch khi đi. Cả hai hợp gân gót.",
		match: (n) => /gastrocnemius|soleus/i.test(n)
	},
	{
		id: "muscle-glute",
		tab: "muscle",
		vi: "Cơ mông",
		latin: "Mm. glutei",
		body: "Mông lớn duỗi và xoay ngoài háng. Mông nhỡ và mông bé dạng háng, giữ khung chậu khi đứng một chân. Yếu mông nhỡ: khung chậu đổ khi đứng chân đó, dáng đi Trendelenburg.",
		match: (n) => /gluteus maximus|gluteus medius|gluteus minimus/i.test(n)
	},
	{
		id: "joint-shoulder",
		tab: "joint",
		vi: "Khớp vai",
		latin: "Articulatio humeri",
		rom: "shoulder",
		body: "Ổ chảo nông, biên độ rộng nhất cơ thể, đổi lại dễ trật. Trật lần đầu sau chấn thương là cấp cứu chỉnh hình — không tự kéo. Chóp xoay và sụn viền giữ chỏm.",
		match: (n) => /^(humerus|scapula|clavicle)/i.test(n)
	},
	{
		id: "joint-elbow",
		tab: "joint",
		vi: "Khớp khuỷu",
		latin: "Articulatio cubiti",
		rom: "elbow",
		body: "Ba khớp trong một bao: cánh tay–trụ, cánh tay–quay, quay–trụ trên. Gấp duỗi ở khuỷu, sấp ngửa ở khớp quay. Mỏm khuỷu là mốc duỗi. Trật khuỷu thường sau ngã chống tay.",
		match: (n) => /^(humerus|radius|ulna)/i.test(n)
	},
	{
		id: "joint-wrist",
		tab: "joint",
		vi: "Khớp cổ tay",
		latin: "Articulatio radiocarpea",
		body: "Đầu dưới xương quay khớp hàng xương cổ tay gần. Xương thuyền là xương cổ tay hay gãy nhất khi ngã chống tay, dễ hoại tử nếu bỏ sót vì đau lúc đầu có thể nhẹ.",
		match: (n) => /^(radius|scaphoid|lunate)/i.test(n)
	},
	{
		id: "joint-hip",
		tab: "joint",
		vi: "Khớp háng",
		latin: "Articulatio coxae",
		body: "Ổ cối sâu, vững hơn vai. Gãy cổ xương đùi ở người già hay gặp hơn trật. Trật háng sau chấn thương năng lượng cao, chân ngắn xoay trong — khác gãy cổ xương đùi (xoay ngoài).",
		match: (n) => /^(femur|hip bone)/i.test(n) || /ilium|ischium|pubis/i.test(n)
	},
	{
		id: "joint-knee",
		tab: "joint",
		vi: "Khớp gối",
		latin: "Articulatio genus",
		rom: "knee",
		body: "Lồi cầu đùi trên mâm chày, bánh chè ở trước. Dây chằng chéo và bên, cùng sụn chêm, giữ vững. Sưng nhanh sau xoay người gợi ý máu trong khớp — cần khám, không phải chỉ chườm.",
		match: (n) => /^(femur|tibia|patella)/i.test(n)
	},
	{
		id: "joint-ankle",
		tab: "joint",
		vi: "Khớp cổ chân",
		latin: "Articulatio talocruralis",
		body: "Ròng rọc xương sên kẹp giữa hai mắt cá. Bong gân mặt ngoài (dây chằng mác–sên trước) là thường gặp. Không chịu được lực hoặc đau đúng mắt cá thì cần loại trừ gãy.",
		match: (n) => /^(tibia|fibula|talus)/i.test(n)
	},
	{
		id: "joint-cspine",
		tab: "joint",
		vi: "Khớp cột sống cổ",
		latin: "Articulationes cervicales",
		body: "C1–C2 quay đầu. Các đốt dưới gấp duỗi. Sau chấn thương: đau cổ, tê tay hoặc yếu chân — cố định, không tự nắn. Vẹo cổ cấp do cơ khác với chấn thương.",
		match: (n) => /atlas|axis|vertebra c/i.test(n)
	},
	{
		id: "joint-lspine",
		tab: "joint",
		vi: "Khớp cột sống thắt lưng",
		latin: "Articulationes lumbales",
		body: "Đĩa và khớp diện sau chia sẻ lực. Đau lưng cơ năng phổ biến. Dấu hiệu rễ (đau lan đúng đường, yếu, tê) mới nghĩ đĩa. Bí tiểu và tê yên ngựa là cấp cứu.",
		match: (n) => /vertebra l|sacrum/i.test(n)
	},
	{
		id: "path-neck-femur",
		tab: "path",
		vi: "Gãy cổ xương đùi",
		latin: "Fractura colli femoris",
		body: "Người già ngã, không đứng được. Chân bên gãy ngắn và xoay ngoài. Khác trật háng sau (thường xoay trong, sau chấn thương mạnh ở người trẻ). Đây là cấp cứu chỉnh hình vì nguy cơ hoại tử chỏm và biến chứng nằm lâu.",
		match: (n) => /^femur/i.test(n)
	},
	{
		id: "path-acl",
		tab: "path",
		vi: "Đứt dây chằng chéo trước",
		latin: "Ruptura ligamenti cruciati anterioris",
		body: "Xoay người khi bàn chân trụ, nghe tiếng rắc, sưng gối trong vài giờ. Chéo trước ngăn xương chày trượt ra trước so với đùi. Nhiều người đi lại được sau đó nhưng lỏng gối khi xoay. Chẩn đoán bằng khám và cộng hưởng, không bằng mô hình.",
		match: (n) => /^(femur|tibia)/i.test(n)
	},
	{
		id: "path-shoulder",
		tab: "path",
		vi: "Trật khớp vai",
		latin: "Luxatio humeri",
		body: "Thường chỏm ra trước-dưới sau tư thế dạng xoay ngoài. Vai vuông, mất chỏm ở chỗ cũ, cánh tay khép. Trật lần đầu cần nắn tại cơ sở y tế sau khi loại trừ gãy — không tự kéo trên sân.",
		match: (n) => /^(humerus|scapula)/i.test(n)
	},
	{
		id: "path-cts",
		tab: "path",
		vi: "Hội chứng ống cổ tay",
		latin: "Syndroma canalis carpi",
		body: "Thần kinh giữa bị chèn trong ống cổ tay. Tê ngón cái, trỏ, giữa, thường đêm, rung tay thì đỡ. Teo mô cái là giai đoạn muộn. Cần phân biệt chèn rễ cổ C6–C7. Nẹp đêm là bước đầu; đo dẫn truyền thần kinh xác nhận.",
		match: (n) => /^(radius|scaphoid)/i.test(n) || /flexor carpi|flexor digitorum|flexor pollicis/i.test(n)
	},
	{
		id: "path-disc",
		tab: "path",
		vi: "Thoát vị đĩa đệm thắt lưng",
		latin: "Prolapsus disci intervertebralis",
		body: "Nhân nhầy đĩa lệch, thường L4–L5 hoặc L5–S1, chèn rễ. Đau lan theo đường đi của rễ, có thể tê và yếu cơ (khó kiễng gót hoặc khó nâng mũi chân). Đa số đỡ trong vài tuần với vận động hợp lý. Bí tiểu, tê vùng yên ngựa, yếu hai chân: nghĩ hội chứng đuôi ngựa — cấp cứu.",
		match: (n) => /vertebra l|sacrum/i.test(n)
	},
	{
		id: "path-cspine",
		tab: "path",
		vi: "Thoái hóa cột sống cổ",
		latin: "Spondylosis cervicalis",
		body: "Gai xương và đĩa thoái hóa làm hẹp lỗ liên hợp hoặc ống sống. Đau cổ gáy, có thể đau rễ xuống tay hoặc — nếu hẹp ống — đi không vững, tê hai tay. Khác với vẹo cổ cấp do cơ. Chụp chỉ có ý nghĩa khi khám thần kinh bất thường, không chụp vì mọi cơn đau cổ.",
		match: (n) => /atlas|axis|vertebra c/i.test(n)
	},
	{
		id: "path-osteo",
		tab: "path",
		vi: "Loãng xương",
		latin: "Osteoporosis",
		body: "Mất khối lượng và vi cấu trúc xương, im lặng đến khi gãy: cổ xương đùi, đốt sống, đầu dưới xương quay. Gãy lún đốt sống có thể không do ngã. Chẩn đoán bằng đo mật độ xương, không bằng mô hình. Phòng: chịu lực (đi bộ), đủ đạm, vitamin D theo chỉ định, không hút thuốc.",
		match: (n) => /vertebra|femur|radius/i.test(n)
	},
	{
		id: "path-colles",
		tab: "path",
		vi: "Gãy đầu dưới xương quay",
		latin: "Fractura radii typus Colles",
		body: "Ngã chống bàn tay duỗi. Đầu dưới xương quay di lệch ra sau, cổ tay biến dạng lưng đĩa úp. Cần nắn và bất động đúng; lệch khớp quay–trụ dưới để lại hạn chế sấp ngửa. Ở xương loãng, cùng một cú ngã có thể gãy cả háng — luôn hỏi người già có đứng được không.",
		match: (n) => /^radius/i.test(n)
	},
	{
		id: "path-calf",
		tab: "path",
		vi: "Rách cơ sinh đôi",
		latin: "Ruptura gastrocnemii",
		body: "Thường đầu trong, khi bật nhảy hoặc tăng tốc: đau như bị đá vào bắp chân, có thể bầm xuống cổ chân sau vài ngày. Khác đứt gân gót (hõm trên gót, không kiễng được một chân, test Thompson). Nghỉ tương đối, đi sớm trong đau chịu được, không nằm bất động lâu.",
		match: (n) => /gastrocnemius|soleus/i.test(n)
	}
], ...EXTRA_TOPICS];
var TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
var QUIZ = [
	{
		q: "Cơ nào của chóp xoay đi dưới mỏm cùng vai và hay rách nhất?",
		options: [
			"Cơ trên gai",
			"Cơ thẳng bụng",
			"Cơ sinh đôi",
			"Cơ cắn"
		],
		a: 0,
		topicId: "muscle-cuff",
		explain: "Cơ trên gai khởi động dạng vai và chui qua khoảng dưới cùng vai — chỗ hẹp cơ học."
	},
	{
		q: "Gãy cổ xương đùi ở người già sau ngã thường thấy chân bên gãy…",
		options: [
			"Dài ra và xoay trong",
			"Ngắn lại và xoay ngoài",
			"Không đổi tư thế",
			"Gấp cứng vào bụng"
		],
		a: 1,
		topicId: "path-neck-femur",
		explain: "Cơ xoay ngoài và cơ thắt lưng kéo đoạn trên; chân nhìn ngắn và đổ ra ngoài. Đây là cấp cứu."
	},
	{
		q: "Dây chằng chéo trước chủ yếu ngăn điều gì?",
		options: [
			"Bánh chè lệch lên trên",
			"Xương chày trượt ra trước so với đùi",
			"Sườn lệch khỏi ức",
			"Xương đòn hạ thấp"
		],
		a: 1,
		topicId: "path-acl",
		explain: "Chéo trước đi từ mặt trong lồi cầu đùi ngoài tới diện trước gai mâm chày."
	},
	{
		q: "Đĩa đệm thoát vị gây đau lan chân thường nhất ở tầng nào?",
		options: [
			"C1–C2",
			"T1–T2",
			"L4–L5 hoặc L5–S1",
			"Xương sườn 12"
		],
		a: 2,
		topicId: "path-disc",
		explain: "Hai tầng thấp nhất chịu lực cắt lớn nhất của cột sống thắt lưng."
	},
	{
		q: "Khớp nào dễ trật nhất vì ổ nông?",
		options: [
			"Khớp háng",
			"Khớp vai",
			"Khớp gối",
			"Khớp sọ–C1"
		],
		a: 1,
		topicId: "joint-shoulder",
		explain: "Ổ chảo chỉ ôm một phần chỏm. Vai đổi lại bằng biên độ rất rộng."
	},
	{
		q: "Cơ tứ đầu đùi có chức năng chính với khớp gối là…",
		options: [
			"Gấp gối",
			"Duỗi gối",
			"Xoay trong cổ chân",
			"Khép các ngón"
		],
		a: 1,
		topicId: "muscle-quad",
		explain: "Bốn đầu hợp gân bám qua bánh chè xuống lồi củ chày, duỗi gối."
	},
	{
		q: "Tê ngón cái, trỏ, giữa về đêm gợi ý chèn thần kinh nào?",
		options: [
			"Thần kinh giữa trong ống cổ tay",
			"Thần kinh mũ",
			"Thần kinh mác nông",
			"Thần kinh phụ"
		],
		a: 0,
		topicId: "path-cts",
		explain: "Thần kinh giữa qua ống cổ tay. Rễ cổ cũng có thể tê tay — cần khám phân biệt."
	},
	{
		q: "Loãng xương hay gãy im lặng ở đâu, đôi khi không cần ngã mạnh?",
		options: [
			"Xương bánh chè",
			"Đốt sống",
			"Xương móng",
			"Xương bướm"
		],
		a: 1,
		topicId: "path-osteo",
		explain: "Gãy lún thân đốt sống, cùng cổ xương đùi và đầu dưới xương quay, là ba vị trí điển hình."
	}
];
function quizOf(system) {
	if (system === "circ") return QUIZ_CIRC;
	if (system === "resp") return QUIZ_RESP;
	return QUIZ;
}
var PHRASES = [
	[
		/atlas/i,
		"Đốt đội C1",
		"Atlas"
	],
	[
		/axis/i,
		"Đốt trục C2",
		"Axis"
	],
	[
		/humerus/i,
		"Xương cánh tay",
		"Humerus"
	],
	[
		/femur/i,
		"Xương đùi",
		"Femur"
	],
	[
		/patella/i,
		"Xương bánh chè",
		"Patella"
	],
	[
		/tibia/i,
		"Xương chày",
		"Tibia"
	],
	[
		/fibula/i,
		"Xương mác",
		"Fibula"
	],
	[
		/radius/i,
		"Xương quay",
		"Radius"
	],
	[
		/ulna/i,
		"Xương trụ",
		"Ulna"
	],
	[
		/scapula/i,
		"Xương bả vai",
		"Scapula"
	],
	[
		/clavicle/i,
		"Xương đòn",
		"Clavicula"
	],
	[
		/mandible/i,
		"Xương hàm dưới",
		"Mandibula"
	],
	[
		/hip bone/i,
		"Xương chậu",
		"Os coxae"
	],
	[
		/sacrum/i,
		"Xương cùng",
		"Os sacrum"
	],
	[
		/coccyx/i,
		"Xương cụt",
		"Os coccygis"
	],
	[
		/talus/i,
		"Xương sên",
		"Talus"
	],
	[
		/calcaneus/i,
		"Xương gót",
		"Calcaneus"
	],
	[
		/frontal bone/i,
		"Xương trán",
		"Os frontale"
	],
	[
		/parietal/i,
		"Xương đỉnh",
		"Os parietale"
	],
	[
		/occipital/i,
		"Xương chẩm",
		"Os occipitale"
	],
	[
		/temporal bone/i,
		"Xương thái dương",
		"Os temporale"
	],
	[
		/sphenoid/i,
		"Xương bướm",
		"Os sphenoidale"
	],
	[
		/ethmoid/i,
		"Xương sàng",
		"Os ethmoidale"
	],
	[
		/zygomatic/i,
		"Xương gò má",
		"Os zygomaticum"
	],
	[
		/maxilla/i,
		"Xương hàm trên",
		"Maxilla"
	],
	[
		/nasal bone/i,
		"Xương mũi",
		"Os nasale"
	],
	[
		/manubrium/i,
		"Cán xương ức",
		"Manubrium sterni"
	],
	[
		/xiphoid/i,
		"Mũi kiếm xương ức",
		"Processus xiphoideus"
	],
	[
		/body of sternum|sternum/i,
		"Thân xương ức",
		"Corpus sterni"
	],
	[
		/pectoralis major/i,
		"Cơ ngực lớn",
		"M. pectoralis major"
	],
	[
		/pectoralis minor/i,
		"Cơ ngực bé",
		"M. pectoralis minor"
	],
	[
		/deltoid/i,
		"Cơ delta",
		"M. deltoideus"
	],
	[
		/biceps brachii/i,
		"Cơ nhị đầu cánh tay",
		"M. biceps brachii"
	],
	[
		/triceps brachii/i,
		"Cơ tam đầu cánh tay",
		"M. triceps brachii"
	],
	[
		/supraspinatus/i,
		"Cơ trên gai",
		"M. supraspinatus"
	],
	[
		/infraspinatus/i,
		"Cơ dưới gai",
		"M. infraspinatus"
	],
	[
		/subscapularis/i,
		"Cơ dưới vai",
		"M. subscapularis"
	],
	[
		/teres minor/i,
		"Cơ tròn bé",
		"M. teres minor"
	],
	[
		/teres major/i,
		"Cơ tròn lớn",
		"M. teres major"
	],
	[
		/trapezius/i,
		"Cơ thang",
		"M. trapezius"
	],
	[
		/latissimus dorsi/i,
		"Cơ lưng rộng",
		"M. latissimus dorsi"
	],
	[
		/rectus abdominis/i,
		"Cơ thẳng bụng",
		"M. rectus abdominis"
	],
	[
		/gluteus maximus/i,
		"Cơ mông lớn",
		"M. gluteus maximus"
	],
	[
		/gluteus medius/i,
		"Cơ mông nhỡ",
		"M. gluteus medius"
	],
	[
		/gluteus minimus/i,
		"Cơ mông bé",
		"M. gluteus minimus"
	],
	[
		/vastus lateralis/i,
		"Cơ rộng ngoài",
		"M. vastus lateralis"
	],
	[
		/vastus medialis/i,
		"Cơ rộng trong",
		"M. vastus medialis"
	],
	[
		/vastus intermedius/i,
		"Cơ rộng giữa",
		"M. vastus intermedius"
	],
	[
		/rectus femoris/i,
		"Cơ thẳng đùi",
		"M. rectus femoris"
	],
	[
		/biceps femoris/i,
		"Cơ nhị đầu đùi",
		"M. biceps femoris"
	],
	[
		/semitendinosus/i,
		"Cơ bán gân",
		"M. semitendinosus"
	],
	[
		/semimembranosus/i,
		"Cơ bán mạc",
		"M. semimembranosus"
	],
	[
		/gastrocnemius/i,
		"Cơ sinh đôi",
		"M. gastrocnemius"
	],
	[
		/soleus/i,
		"Cơ dép",
		"M. soleus"
	],
	[
		/tibialis anterior/i,
		"Cơ chày trước",
		"M. tibialis anterior"
	],
	[
		/sternocleidomastoid/i,
		"Cơ ức đòn chũm",
		"M. sternocleidomastoideus"
	],
	[
		/masseter/i,
		"Cơ cắn",
		"M. masseter"
	],
	[
		/temporalis/i,
		"Cơ thái dương",
		"M. temporalis"
	],
	[
		/iliacus/i,
		"Cơ chậu",
		"M. iliacus"
	],
	[
		/psoas major/i,
		"Cơ thắt lưng lớn",
		"M. psoas major"
	],
	[
		/sartorius/i,
		"Cơ may",
		"M. sartorius"
	],
	[
		/brachioradialis/i,
		"Cơ cánh tay–quay",
		"M. brachioradialis"
	],
	[
		/scaphoid/i,
		"Xương thuyền",
		"Os scaphoideum"
	]
];
function baseName(raw) {
	return raw.replace(/\.\d+$/g, "").trim();
}
function labelOf(raw) {
	const name = baseName(raw);
	const vert = name.match(/^vertebra\s+([ctl])(\d+)/i);
	if (vert) {
		const region = vert[1].toUpperCase();
		return {
			vi: `Đốt sống ${region === "C" ? "cổ" : region === "T" ? "ngực" : "thắt lưng"} ${region}${vert[2]}`,
			latin: `Vertebra ${region}${vert[2]}`
		};
	}
	const rib = name.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)\s+rib/i);
	if (rib) {
		const n = ribN[rib[1].toLowerCase()] ?? "";
		return {
			vi: `Xương sườn ${n}`,
			latin: `Costa ${n}`
		};
	}
	const cart = name.match(/^costal cartilage of the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)/i);
	const cart2 = name.match(/^costal cartilage of (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)/i);
	const which = cart?.[1] ?? cart2?.[1];
	if (which) {
		const n = ribN[which.toLowerCase()] ?? "";
		return {
			vi: `Sụn sườn ${n}`,
			latin: `Cartilago costalis ${n}`
		};
	}
	for (const [re, vi, latin] of PHRASES) if (re.test(name)) return {
		vi,
		latin
	};
	if (/cartilage/i.test(name)) return {
		vi: "Sụn",
		latin: name
	};
	if (/muscle/i.test(name)) return {
		vi: "Cơ",
		latin: name
	};
	return {
		vi: name,
		latin: name
	};
}
function bestTopic(name, tab) {
	return TOPICS.find((t) => t.tab === tab && t.match(name)) ?? null;
}
function structureTopic(name, kind) {
	return bestTopic(name, kind === "muscle" ? "muscle" : "bone") ?? TOPICS.find((t) => (t.system ?? "cxk") === "cxk" && t.tab !== "path" && t.match(name)) ?? null;
}
function sideWord(side) {
	if (side === "giữa") return "";
	return side === "trái" ? "bên trái" : "bên phải";
}
var DISCLAIMER = "Tài liệu giảng dạy. Không chẩn đoán, không kê đơn, không thay khám lâm sàng hay phim chụp. Không phải thiết bị y tế.";
var TICKER = "ATLAS CXK  ·  CƠ XƯƠNG KHỚP  ·  TUẦN HOÀN  ·  HÔ HẤP  ·  Z-ANATOMY CC BY-SA 4.0  ·  BODYPARTS3D DBCLS CC BY-SA 2.1 JP  ·  VISIBLE HUMAN / HUBMAP CC BY 4.0  ·  CHỈ ĐỂ HỌC VÀ GIẢNG  ·  KHÔNG CHẨN ĐOÁN  ·  KHÔNG PHẢI THIẾT BỊ Y TẾ  ·  ĐAU NGỰC MỚI, KHÓ THỞ TĂNG, CHOÁNG LÀ ĐI CẤP CỨU  ·  ";
var KEY = "atlas-cxk-v2";
function readPersist() {
	if (typeof localStorage === "undefined") return {
		studied: [],
		quizBest: 0
	};
	try {
		const raw = localStorage.getItem(KEY) ?? localStorage.getItem("atlas-cxk-v1");
		if (!raw) return {
			studied: [],
			quizBest: 0
		};
		const data = JSON.parse(raw);
		return {
			studied: Array.isArray(data.studied) ? data.studied.slice(0, 400) : [],
			quizBest: typeof data.quizBest === "number" ? data.quizBest : 0
		};
	} catch {
		return {
			studied: [],
			quizBest: 0
		};
	}
}
function writePersist(studied, quizBest) {
	try {
		localStorage.setItem(KEY, JSON.stringify({
			studied,
			quizBest
		}));
	} catch {}
}
var TAB_OF = {
	cxk: "bone",
	circ: "heart",
	resp: "lung"
};
var useAtlas = create((set, get) => ({
	ready: false,
	error: null,
	parts: [],
	pivots: [],
	radius: 1,
	halfY: .8,
	system: "cxk",
	heartCut: false,
	tab: "bone",
	topicId: null,
	meshId: null,
	isolate: false,
	xray: false,
	rom: false,
	side: "cả",
	detail: false,
	query: "",
	studied: [],
	quizBest: 0,
	quizIndex: 0,
	quizScore: 0,
	quizChoice: null,
	quizDone: false,
	boot: (payload) => set({
		ready: true,
		error: null,
		...payload
	}),
	fail: (message) => set({
		error: message,
		ready: false
	}),
	hydrate: () => set(readPersist()),
	setSystem: (system) => set({
		system,
		heartCut: false,
		tab: TAB_OF[system],
		topicId: null,
		meshId: null,
		rom: false,
		isolate: false,
		query: "",
		ready: false,
		error: null,
		parts: [],
		quizIndex: 0,
		quizScore: 0,
		quizChoice: null,
		quizDone: false
	}),
	toggleHeart: () => set({
		heartCut: !get().heartCut,
		system: "circ",
		tab: "heart",
		topicId: null,
		meshId: null,
		rom: false,
		ready: false,
		error: null,
		parts: []
	}),
	setTab: (tab) => {
		set({
			tab,
			topicId: (tab === "path" ? TOPICS.find((item) => (item.system ?? "cxk") === get().system && item.tab === "path") : void 0)?.id ?? null,
			meshId: null,
			rom: false,
			query: ""
		});
	},
	setQuery: (query) => set({ query }),
	pickTopic: (id) => {
		const studied = Array.from(/* @__PURE__ */ new Set([...get().studied, id]));
		writePersist(studied, get().quizBest);
		set({
			topicId: id,
			meshId: null,
			rom: false,
			studied,
			query: ""
		});
	},
	pickMesh: (uuid) => {
		const part = get().parts.find((p) => p.uuid === uuid);
		const studied = part ? Array.from(/* @__PURE__ */ new Set([...get().studied, part.uuid])) : get().studied;
		if (part) writePersist(studied, get().quizBest);
		const current = get().topicId;
		set({
			meshId: uuid,
			topicId: Boolean(current && part && TOPIC_BY_ID[current]?.match(part.name)) ? current : part?.topicId ?? null,
			studied,
			rom: false
		});
	},
	clearMesh: () => set({ meshId: null }),
	resetView: () => set({
		topicId: null,
		meshId: null,
		rom: false,
		isolate: false
	}),
	toggle: (key) => set((s) => ({ [key]: !s[key] })),
	setSide: (side) => set({
		side,
		rom: false
	}),
	answer: (index) => {
		const { quizChoice, quizIndex, quizScore, quizBest, studied, system } = get();
		if (quizChoice !== null) return;
		const score = quizScore + (index === quizOf(system)[quizIndex]?.a ? 1 : 0);
		const best = Math.max(quizBest, score);
		writePersist(studied, best);
		set({
			quizChoice: index,
			quizScore: score,
			quizBest: best
		});
	},
	nextQuiz: () => {
		const { quizIndex, system } = get();
		if (quizIndex + 1 >= quizOf(system).length) set({ quizDone: true });
		else set({
			quizIndex: quizIndex + 1,
			quizChoice: null
		});
	},
	resetQuiz: () => set({
		quizIndex: 0,
		quizScore: 0,
		quizChoice: null,
		quizDone: false
	})
}));
var SYSTEMS = [
	{
		id: "cxk",
		label: "Cơ xương"
	},
	{
		id: "circ",
		label: "Tuần hoàn"
	},
	{
		id: "resp",
		label: "Hô hấp"
	}
];
var TABS = {
	cxk: [
		{
			id: "bone",
			label: "Xương",
			icon: Bone
		},
		{
			id: "muscle",
			label: "Cơ",
			icon: Activity
		},
		{
			id: "joint",
			label: "Khớp",
			icon: CircleDot
		},
		{
			id: "path",
			label: "Bệnh",
			icon: Stethoscope
		},
		{
			id: "quiz",
			label: "Luyện",
			icon: GraduationCap
		}
	],
	circ: [
		{
			id: "heart",
			label: "Tim",
			icon: HeartPulse
		},
		{
			id: "vessel",
			label: "Mạch",
			icon: Waypoints
		},
		{
			id: "path",
			label: "Bệnh",
			icon: Stethoscope
		},
		{
			id: "quiz",
			label: "Luyện",
			icon: GraduationCap
		}
	],
	resp: [
		{
			id: "lung",
			label: "Phổi",
			icon: Wind
		},
		{
			id: "airway",
			label: "Khí đạo",
			icon: Activity
		},
		{
			id: "path",
			label: "Bệnh",
			icon: Stethoscope
		},
		{
			id: "quiz",
			label: "Luyện",
			icon: GraduationCap
		}
	]
};
var FALLBACK = {
	cxk: "Xoay mô hình bằng một ngón. Chụm để phóng. Chọn Xương, Cơ, Khớp hoặc Bệnh. Vàng là cấu trúc đang chọn.",
	circ: "Cây mạch người lớn từ atlas Z-Anatomy. Đỏ: động mạch hệ thống và tĩnh mạch phổi. Xanh: tĩnh mạch hệ thống và động mạch phổi. Nhịp là minh họa, không phải mạch của người đang xem. Buồng tim mở lát cắt Visible Human.",
	resp: "Phổi Visible Human nam, tới phân thùy phế quản-phổi. Không cùng một cơ thể với cây mạch. Bật Chi tiết để hiện phân thùy. Thở chỉ là nhịp minh họa."
};
function speak(text) {
	if (typeof speechSynthesis === "undefined") return;
	const utter = new SpeechSynthesisUtterance(text);
	utter.lang = "vi-VN";
	utter.rate = .98;
	speechSynthesis.cancel();
	speechSynthesis.speak(utter);
}
function Shell() {
	const [Stage, setStage] = (0, import_react.useState)(null);
	const [when, setWhen] = (0, import_react.useState)("");
	const [sourceOpen, setSourceOpen] = (0, import_react.useState)(false);
	const system = useAtlas((s) => s.system);
	const heartCut = useAtlas((s) => s.heartCut);
	const tab = useAtlas((s) => s.tab);
	const ready = useAtlas((s) => s.ready);
	const error = useAtlas((s) => s.error);
	const topicId = useAtlas((s) => s.topicId);
	const meshId = useAtlas((s) => s.meshId);
	const parts = useAtlas((s) => s.parts);
	const query = useAtlas((s) => s.query);
	const studied = useAtlas((s) => s.studied);
	const isolate = useAtlas((s) => s.isolate);
	const xray = useAtlas((s) => s.xray);
	const rom = useAtlas((s) => s.rom);
	const detail = useAtlas((s) => s.detail);
	const side = useAtlas((s) => s.side);
	(0, import_react.useEffect)(() => {
		useAtlas.getState().hydrate();
		setWhen((/* @__PURE__ */ new Date()).toLocaleDateString("vi-VN", {
			weekday: "long",
			day: "numeric",
			month: "long",
			year: "numeric"
		}));
		import("./AtlasStage-C3i6a498.mjs").then((mod) => setStage(() => mod.AtlasStage));
		const onKey = (event) => {
			if (event.key === "Escape") useAtlas.getState().clearMesh();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const mesh = parts.find((p) => p.uuid === meshId) ?? null;
	const topic = topicId ? TOPIC_BY_ID[topicId] : void 0;
	const tabs = TABS[system];
	const list = (0, import_react.useMemo)(() => TOPICS.filter((item) => (item.system ?? "cxk") === system && item.tab === tab), [tab, system]);
	const hits = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (q.length < 2) return [];
		return parts.filter((p) => p.vi.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.latin.toLowerCase().includes(q)).slice(0, 24);
	}, [parts, query]);
	const title = mesh ? [mesh.vi, sideWord(mesh.side)].filter(Boolean).join(" ") : topic?.vi ?? "Chạm một cấu trúc";
	const latin = mesh?.latin ?? topic?.latin ?? "Atlas giải phẫu mở";
	const body = topic?.body ?? (tab === "path" ? "Chọn một mẫu để ôn. Atlas không biết triệu chứng của người đang cầm máy, không đo hẹp van, không thấy cục máu hay dịch màng phổi. Đối chiếu với bệnh án thật do thầy thuốc phụ trách." : FALLBACK[system]);
	const lessonCount = TOPICS.filter((item) => (item.system ?? "cxk") === system).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-ink text-paper",
		style: {
			paddingTop: "env(safe-area-inset-top)",
			paddingBottom: "env(safe-area-inset-bottom)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 flex-1 grid-rows-[minmax(0,11fr)_minmax(0,2fr)] gap-1 p-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gold-frame relative min-h-0 overflow-hidden bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						children: Stage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stage, {}) : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "pointer-events-none absolute inset-x-0 top-0 z-10 flex flex-col gap-2 p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-auto flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg leading-none tracking-widest text-gold uppercase",
										children: "Atlas CXK"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-muted",
										children: "Cơ · Xương · Khớp · Tuần hoàn · Hô hấp"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex h-11 min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-panel/90 px-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
											className: "size-4 shrink-0 text-gold",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: query,
											onChange: (event) => useAtlas.getState().setQuery(event.target.value),
											placeholder: system === "cxk" ? "Tìm xương, cơ…" : "Tìm mạch, phổi…",
											className: "w-full bg-transparent text-sm text-paper outline-none placeholder:text-muted",
											"aria-label": "Tìm cấu trúc"
										}),
										query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "grid size-8 place-items-center text-muted",
											onClick: () => useAtlas.getState().setQuery(""),
											"aria-label": "Xóa tìm kiếm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
										}) : null
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-auto flex gap-1",
								children: SYSTEMS.map((item) => {
									const on = system === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => useAtlas.getState().setSystem(item.id),
										className: "h-11 flex-1 rounded-md border font-display text-sm tracking-wide uppercase " + (on ? "border-gold bg-gold text-ink" : "border-line bg-panel/90 text-ivory"),
										children: item.label
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-auto no-scrollbar flex gap-1 overflow-x-auto",
								children: tabs.map((item) => {
									const Icon = item.icon;
									const on = tab === item.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => useAtlas.getState().setTab(item.id),
										className: "flex h-11 shrink-0 items-center gap-1 rounded-md border px-3 font-display text-sm tracking-wide uppercase " + (on ? "border-gold bg-gold text-ink" : "border-line bg-panel/90 text-ivory"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-4",
											"aria-hidden": "true"
										}), item.label]
									}, item.id);
								})
							})
						]
					}),
					system !== "cxk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute top-40 left-2 z-10 flex flex-col gap-1",
						children: system === "circ" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper",
							children: "Đỏ · máu giàu oxy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper",
							children: "Xanh · máu nghèo oxy"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper",
							children: "Hồng · nhu mô phổi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-line bg-panel/90 px-2 py-1 text-xs text-paper",
							children: "Kem · khí quản, phế quản"
						})] })
					}) : null,
					!ready && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid place-items-center bg-ink/95 px-6 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl tracking-widest text-gold uppercase",
							children: "Đang mở atlas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Mô hình hợp pháp, giải nén trên máy — vài giây."
						})] })
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-6 bottom-24 rounded-md border border-gold bg-panel p-4 text-sm",
						children: error
					}) : null,
					query.trim().length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-2 top-44 z-20 max-h-1/2 overflow-auto rounded-md border border-line bg-panel",
						children: hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-3 text-sm text-muted",
							children: "Không thấy cấu trúc khớp với chữ vừa gõ."
						}) : hits.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex min-h-11 w-full items-baseline justify-between gap-3 border-b border-line px-3 py-2 text-left last:border-b-0",
							onClick: () => useAtlas.getState().pickMesh(hit.uuid),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-paper",
								children: [hit.vi, sideWord(hit.side) ? ` ${sideWord(hit.side)}` : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-xs text-muted",
								children: hit.latin
							})]
						}, hit.uuid))
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-2 bottom-2 z-10 flex max-h-1/2 flex-col gap-2 overflow-hidden",
						children: [tab === "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizCard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-scrollbar flex gap-2 overflow-x-auto",
							children: list.map((item) => {
								const on = topicId === item.id && !mesh;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => useAtlas.getState().pickTopic(item.id),
									className: "h-11 shrink-0 rounded-md border px-3 text-sm " + (on ? "border-gold bg-navy text-gold" : "border-line bg-panel/90 text-paper"),
									children: item.vi
								}, item.id);
							})
						}), tab !== "quiz" && (mesh || topic || tab === "path") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "min-h-0 overflow-auto rounded-md border border-line bg-panel/95 p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-base tracking-wide text-gold uppercase",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-ivory",
									children: latin
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-paper",
									children: body
								}),
								topic?.board ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 grid gap-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display tracking-wide text-gold uppercase",
											children: "Nhận diện "
										}), topic.board.see] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display tracking-wide text-gold uppercase",
											children: "Ôn trên hình "
										}), topic.board.step] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-ivory",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display tracking-wide text-gold uppercase",
												children: "Cờ đỏ "
											}), topic.board.flag]
										})
									]
								}) : null,
								system !== "cxk" || tab === "path" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-muted",
									children: DISCLAIMER
								}) : null,
								heartCut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-ivory",
									children: "Buồng tim Visible Human — không có cây mạch. Tắt nút Buồng tim để xem toàn bộ hệ mạch."
								}) : null
							]
						}) : null]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gold-frame flex min-h-0 flex-col justify-center gap-1 overflow-hidden bg-panel px-2 py-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ticker-track font-display text-xs tracking-widest uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3",
								children: TICKER
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3",
								children: TICKER
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate capitalize",
							children: when || "—"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0",
							children: [
								"Đã xem ",
								studied.length,
								" · ",
								lessonCount,
								" bài hệ này"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "no-scrollbar flex gap-1 overflow-x-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: false,
								label: "Nghe",
								icon: Volume2,
								onClick: () => speak(`${title}. ${body}`)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: isolate,
								label: "Cô lập",
								icon: Scan,
								onClick: () => useAtlas.getState().toggle("isolate")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: xray,
								label: "X-quang",
								icon: Bone,
								onClick: () => useAtlas.getState().toggle("xray")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: rom,
								label: system === "circ" ? "Nhịp" : system === "resp" ? "Thở" : "Biên độ",
								icon: Activity,
								disabled: system === "cxk" && !topic?.rom,
								onClick: () => useAtlas.getState().toggle("rom")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: detail,
								label: "Chi tiết",
								icon: CircleDot,
								onClick: () => useAtlas.getState().toggle("detail")
							}),
							system === "circ" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: heartCut,
								label: "Buồng tim",
								icon: HeartPulse,
								onClick: () => useAtlas.getState().toggleHeart()
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: false,
								label: "Giữa",
								icon: RotateCcw,
								onClick: () => useAtlas.getState().resetView()
							}),
							[
								"cả",
								"trái",
								"phải"
							].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => useAtlas.getState().setSide(value),
								className: "h-11 shrink-0 rounded-md border px-3 text-sm capitalize " + (side === value ? "border-gold bg-gold text-ink" : "border-line bg-panel-2 text-ivory"),
								children: value
							}, value)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-11 shrink-0 rounded-md border border-line px-3 text-sm text-ivory",
								onClick: () => setSourceOpen(true),
								children: "Nguồn"
							})
						]
					})
				]
			})]
		}), sourceOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-30 grid place-items-end bg-ink/70 p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "gold-frame max-h-4/5 w-full max-w-lg overflow-auto bg-panel p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg tracking-wide text-gold uppercase",
							children: "Nguồn mô hình"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center",
							onClick: () => setSourceOpen(false),
							"aria-label": "Đóng nguồn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper",
						children: "Cơ–xương–khớp: atlas nam người lớn dẫn xuất Z-Anatomy (CC BY-SA 4.0), gốc BodyParts3D của Database Center for Life Science, Nhật Bản (CC BY-SA 2.1 Japan). Bản nén trình duyệt do hpfrei xuất."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper",
						children: "Tuần hoàn: cùng atlas Z-Anatomy, bản glTF hệ mạch do Dr. Murat Altun xuất trong anatomi-simulatoru, giữ giấy phép CC BY-SA 4.0. Buồng tim là mô hình VH_M_Heart không chỉnh sửa của HuBMAP Human Reference Atlas v1.2, CC BY 4.0, từ Visible Human nam."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper",
						children: "Hô hấp: VH_M_Lung không chỉnh sửa, cùng thư viện HuBMAP / Visible Human, CC BY 4.0 (Kristen Browne và nhóm Human Reference Atlas). Phổi và cây mạch không phải cùng một cơ thể, không chồng lên nhau."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ivory",
						children: DISCLAIMER
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: "Trái / phải là bên của hình người trong atlas, không phải bên tay người xem."
					})
				]
			})
		}) : null]
	});
}
function Chip({ on, label, icon: Icon, onClick, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onClick,
		className: "flex h-11 shrink-0 items-center gap-1 rounded-md border px-3 text-sm disabled:opacity-40 " + (on ? "border-gold bg-navy text-gold" : "border-line bg-panel-2 text-ivory"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-4",
			"aria-hidden": "true"
		}), label]
	});
}
function QuizCard() {
	const system = useAtlas((s) => s.system);
	const quizIndex = useAtlas((s) => s.quizIndex);
	const quizScore = useAtlas((s) => s.quizScore);
	const quizChoice = useAtlas((s) => s.quizChoice);
	const quizDone = useAtlas((s) => s.quizDone);
	const bank = quizOf(system);
	const item = bank[quizIndex];
	if (quizDone || !item) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-md border border-line bg-panel/95 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display tracking-wide text-gold uppercase",
				children: "Kết quả luyện"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm",
				children: [
					quizScore,
					"/",
					bank.length,
					" câu đúng. Sau mỗi câu, cấu trúc liên quan được tô vàng trên mô hình."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mt-2 h-11 rounded-md bg-gold px-4 font-display tracking-wide text-ink uppercase",
				onClick: () => useAtlas.getState().resetQuiz(),
				children: "Làm lại"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "min-h-0 overflow-auto rounded-md border border-line bg-panel/95 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					"Câu ",
					quizIndex + 1,
					"/",
					bank.length,
					" · đúng ",
					quizScore
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-sm text-paper",
				children: item.q
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid gap-1",
				children: item.options.map((option, index) => {
					const picked = quizChoice === index;
					const show = quizChoice !== null;
					const correct = index === item.a;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-md border px-3 text-left text-sm " + (!show ? "border-line bg-panel-2 text-paper" : correct ? "border-gold bg-navy text-gold" : picked ? "border-muscle bg-panel-2 text-ivory" : "border-line bg-panel-2 text-muted"),
						onClick: () => useAtlas.getState().answer(index),
						children: option
					}, option);
				})
			}),
			quizChoice !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ivory",
					children: item.explain
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-2 h-11 rounded-md bg-gold px-4 font-display tracking-wide text-ink uppercase",
					onClick: () => useAtlas.getState().nextQuiz(),
					children: quizIndex + 1 >= bank.length ? "Xem điểm" : "Câu tiếp"
				})]
			}) : null
		]
	});
}
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {});
}
//#endregion
export { TOPIC_BY_ID as a, labelOf as c, isFine as d, isJunkName as f, TOPICS as i, quizOf as l, toneOf as m, useAtlas as n, baseName as o, labelSystem as p, QUIZ as r, bestTopic as s, routes_exports as t, structureTopic as u };
