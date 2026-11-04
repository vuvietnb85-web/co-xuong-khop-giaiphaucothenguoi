import type { QuizItem, Topic } from "@/lib/anatomy/content";

export const EXTRA_TOPICS: Topic[] = [
  {
    id: "circ-chambers",
    system: "circ",
    tab: "heart",
    vi: "Bốn buồng tim",
    latin: "Atria et ventriculi",
    body: "Nhĩ phải nhận máu tĩnh mạch chủ. Thất phải bơm lên động mạch phổi. Nhĩ trái nhận máu từ phổi. Thất trái bơm vào động mạch chủ, thành dày hơn vì áp lực hệ thống cao hơn. Vách liên thất là chỗ máu hai bên không được trộn ở người lớn.",
    match: (n) =>
      /^(left|right) (atrium|ventricle)$|cardiac_atrium|heart_(left|right)_ventricle|interventricular_septum|papillary muscle|papillary_muscle/i.test(
        n,
      ),
  },
  {
    id: "circ-valves",
    system: "circ",
    tab: "heart",
    vi: "Bốn van tim",
    latin: "Valvae cordis",
    body: "Van ba lá (nhĩ–thất phải) và van hai lá (nhĩ–thất trái) mở thì tâm trương. Van động mạch phổi và van động mạch chủ mở thì tâm thu, ba lá van hình tổ chim. Tiếng tim bình thường chủ yếu là đóng các van này. Mô hình là van người lớn bình thường, không phải van bệnh.",
    match: (n) =>
      /leaflet|atrioventricular valve|mitral_valve|tricuspid_valve|aortic_valve|pulmonary_valve/i.test(
        n,
      ),
  },
  {
    id: "circ-coronary",
    system: "circ",
    tab: "heart",
    vi: "Động mạch vành",
    latin: "Aa. coronariae",
    body: "Vành trái chia liên thất trước (hay gọi LAD) và mũ (LCx). Vành phải (RCA) ở người ưu thế phải — kiểu thường gặp, không phải mọi người — nuôi thành dưới và thường nút xoang. Liên thất trước nuôi thành trước thất trái, phần lớn vách và mỏm. Tắc một nhánh là mẫu nhồi máu theo vùng, không nhìn thấy trên mô hình này vì mô hình không có mảng xơ vữa.",
    match: (n) =>
      /coronary artery|interventricular artery|circumflex artery of heart|coronary sinus|cardiac vein/i.test(
        n,
      ),
  },
  {
    id: "circ-aorta",
    system: "circ",
    tab: "vessel",
    vi: "Động mạch chủ",
    latin: "Aorta",
    body: "Chủ lên, cung, chủ ngực, chủ bụng. Cung cho thân cánh tay-đầu, cảnh chung trái và dưới đòn trái. Chủ bụng nằm trước cột sống, thường chia hai chậu chung ngang đốt L4. Đường kính trên mô hình là người lớn bình thường — không dùng để đo phình.",
    match: (n) => /aorta|aortic arch|brachiocephalic trunk/i.test(n),
  },
  {
    id: "circ-pulm",
    system: "circ",
    tab: "vessel",
    vi: "Mạch phổi",
    latin: "Circulus sanguinis minor",
    body: "Thất phải → thân động mạch phổi → động mạch phổi phải và trái. Máu ở đây nghèo oxy, nên atlas tô xanh, khác động mạch hệ thống. Tĩnh mạch phổi về nhĩ trái, máu giàu oxy, tô đỏ. Đây là quy ước giảng dạy, không phải màu thật lúc mổ.",
    match: (n) =>
      /pulmonary trunk|pulmonary artery|pulmonary vein|lobar artery of|segmental artery of .+lung|vein of .+lung|lingular artery|bifurcation of pulmonary/i.test(
        n,
      ),
  },
  {
    id: "circ-neck",
    system: "circ",
    tab: "vessel",
    vi: "Mạch cổ và dưới đòn",
    latin: "Carotis, jugularis, subclavia",
    body: "Cảnh chung chia cảnh trong (não) và cảnh ngoài (mặt). Cảnh trong không có nhánh ở cổ. Tĩnh mạch cảnh trong nằm trong bao cảnh, cạnh động mạch. Dưới đòn đi sau xương đòn, liên quan đỉnh phổi — chấn thương xương đòn hoặc đặt catheter có thể đụng mạch hay màng phổi.",
    match: (n) => /carotid|jugular|subclavian/i.test(n),
  },
  {
    id: "circ-viscera",
    system: "circ",
    tab: "vessel",
    vi: "Mạch tạng bụng",
    latin: "Rami viscerales",
    body: "Thân tạng, mạc treo tràng trên và dưới, động mạch thận. Tĩnh mạch cửa gom máu tiêu hóa về gan, không đổ thẳng vào tĩnh mạch chủ. Tắc cửa làm tăng áp cửa — giãn tĩnh mạch thực quản là biến chứng giảng dạy, không thấy trên mô hình bình thường.",
    match: (n) =>
      /renal artery|renal vein|mesenteric|coeliac|celiac|splenic artery|hepatic artery|portal/i.test(
        n,
      ),
  },
  {
    id: "circ-limb",
    system: "circ",
    tab: "vessel",
    vi: "Mạch chi",
    latin: "Vasa membri",
    body: "Đùi tiếp khoeo, rồi chày. Cánh tay: nách → cánh tay → quay và trụ. Tĩnh mạch hiển lớn là tĩnh mạch nông, hay dùng để lấy mạch ghép và cũng là đường huyết khối có thể đi vào tĩnh mạch sâu.",
    match: (n) => /femoral|popliteal|saphenous|brachial|radial artery|ulnar artery/i.test(n),
  },
  {
    id: "circ-cava",
    system: "circ",
    tab: "vessel",
    vi: "Tĩnh mạch chủ",
    latin: "Venae cavae",
    body: "Chủ trên gom nửa trên cơ thể về nhĩ phải. Chủ dưới gom bụng và hai chi dưới, đi sau gan, xuyên cơ hoành. Hệ azygos là đường nối dọc thành sau ngực, có thể dẫn lưu bù khi chủ dưới tắc.",
    match: (n) => /vena cava|azygos/i.test(n),
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
      flag: "Đau ngực mới kéo dài, ngất, hoặc tụt huyết áp là tình huống cấp cứu thật — gọi cấp cứu, không tự kết luận trên atlas.",
    },
    match: (n) =>
      /anterior interventricular|circumflex artery of heart|right coronary artery|left coronary artery/i.test(
        n,
      ),
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
      flag: "Ngất khi gắng sức ở người nghi hẹp van chủ cần khám tim, không phải chỉ nghỉ ngơi cho đỡ.",
    },
    match: (n) => /coronary leaflet|non-coronary leaflet|aortic_valve/i.test(n),
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
      flag: "Phù phổi cấp (khó thở đột ngột, không nằm được) là cấp cứu, không chờ ôn xong bài.",
    },
    match: (n) => /left atrioventricular|mitral_valve|papillary muscle of left ventricle/i.test(n),
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
      flag: "Tụt huyết áp hoặc ngất trong mẫu này là tắc lớn — cấp cứu. Chẩn đoán bằng khám và chụp, không bằng mô hình.",
    },
    match: (n) => /pulmonary trunk|pulmonary artery|lobar artery of .+lung|femoral vein|popliteal vein/i.test(n),
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
      flag: "Đau bụng dữ dội và choáng ở người đã biết phình chủ là cấp cứu ngoại khoa.",
    },
    match: (n) => /abdominal aorta|common iliac artery/i.test(n),
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
      flag: "Kèm khó thở đột ngột thì nghĩ thêm thuyên tắc phổi và đi cấp cứu.",
    },
    match: (n) => /femoral vein|popliteal vein|iliac vein|great saphenous|common iliac/i.test(n),
  },
  {
    id: "resp-lobes",
    system: "resp",
    tab: "lung",
    vi: "Các thùy phổi",
    latin: "Lobi pulmonis",
    body: "Phổi phải ba thùy: trên, giữa, dưới. Phổi trái hai thùy: trên (có lưỡi) và dưới. Rãnh chếch và rãnh ngang là ranh giới. Thùy dưới nghe rõ nhất ở lưng. Viêm phổi thùy thường đóng một thùy, khác viêm phế quản.",
    match: (n) => /upper_lobe|lower_lobe|middle_lobe|superior lobe of|inferior lobe of|middle lobe of/i.test(n),
  },
  {
    id: "resp-seg",
    system: "resp",
    tab: "lung",
    vi: "Phân thùy phổi",
    latin: "Segmenta bronchopulmonalia",
    body: "Mỗi phân thùy có phế quản và mạch riêng, nên có thể viêm hoặc xẹp riêng, và phẫu thuật có thể cắt theo phân thùy. Phải: trên có đỉnh, sau, trước; giữa có ngoài và trong; dưới có các đáy và phân thùy trên. Trái không có thùy giữa — phần lưỡi thay vai trò đó. Bật Chi tiết để thấy hết các phân thùy.",
    match: (n) => /bronchopulmonary_segment|segmental bronchus/i.test(n),
  },
  {
    id: "resp-trachea",
    system: "resp",
    tab: "airway",
    vi: "Khí quản và carina",
    latin: "Trachea et carina",
    body: "Khí quản từ sụn nhẫn xuống carina, chỗ chia hai phế quản gốc. Thành sau là cơ, các vòng sụn không khép kín — kim mở khí quản nhằm đường giữa, tránh mạch cảnh hai bên. Carina là mốc nội soi. Lệch khí quản là dấu hiệu gián tiếp tràn khí hoặc xẹp phổi một bên, không thấy được khi mô hình đang bình thường.",
    match: (n) => /trachea|carina|tracheal/i.test(n),
  },
  {
    id: "resp-bronchi",
    system: "resp",
    tab: "airway",
    vi: "Phế quản gốc",
    latin: "Bronchi principales",
    body: "Phế quản phải ngắn hơn, rộng hơn và dốc hơn phế quản trái. Dị vật hít vào thường rơi về phổi phải. Phế quản trái dài và nằm ngang hơn, bắt chéo qua thực quản và cung động mạch chủ. Phế quản trung gian phải dẫn xuống thùy giữa và thùy dưới.",
    match: (n) => /main_bronchus|main bronchus|intermediate bronchus|lobar_bronchus|lobar bronchus/i.test(n),
  },
  {
    id: "resp-larynx",
    system: "resp",
    tab: "airway",
    vi: "Sụn thanh quản",
    latin: "Cartilagines laryngis",
    body: "Sụn giáp (lồi thanh quản), sụn nhẫn (vòng nguyên dưới dây thanh), sụn nắp, sụn phễu. Mở khí quản kinh điển đi qua màng nhẫn–giáp hoặc dưới sụn nhẫn tùy kỹ thuật — chỉ để nhớ mốc, không phải hướng dẫn thủ thuật. Tắc thanh quản: nói khàn, thở rít thì hít vào.",
    match: (n) => /cricoid|epiglot|arytenoid|corniculate|thyroid cartilage|thyroid_cartilage/i.test(n),
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
      flag: "Khó thở tăng nhanh, tụt huyết áp: cấp cứu. Không chờ chụp nếu người bệnh xấu đi trên đường.",
    },
    match: (n) => /trachea|upper_lobe|lower_lobe|middle_lobe|lungs_/i.test(n),
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
      flag: "Thở nhanh, rối loạn ý thức, môi tím hoặc huyết áp thấp ở người nghi viêm phổi là nặng — cần cơ sở y tế.",
    },
    match: (n) => /upper_lobe|lower_lobe|middle_lobe|superior lobe of|inferior lobe of|middle lobe of/i.test(n),
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
      flag: "Không nói được, không ho được, tím: tắc hoàn toàn — cấp cứu theo nghiệm pháp khai thông đang được dạy tại chỗ, không theo video.",
    },
    match: (n) => /right_main_bronchus|right main bronchus|trachea|carina|left_main_bronchus|left main bronchus/i.test(n),
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
      flag: "Nói cụt, co kéo cơ hô hấp, im phổi (hết rít vì không còn khí) là cơn nặng — cấp cứu.",
    },
    match: (n) => /trachea|bronchus|bronchi/i.test(n),
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
      flag: "Khó thở nhiều hoặc dịch sau chấn thương (máu) cần cơ sở y tế, không chọc thử ở nhà.",
    },
    match: (n) => /lower_lobe|inferior lobe of|middle_lobe|middle lobe of/i.test(n),
  },
];

export const QUIZ_CIRC: QuizItem[] = [
  {
    q: "Động mạch liên thất trước (LAD) chủ yếu nuôi vùng nào?",
    options: ["Thành trước thất trái và phần lớn vách", "Thùy dưới phổi phải", "Thận trái", "Bàn chân"],
    a: 0,
    topicId: "path-lad",
    explain: "Liên thất trước đi ở rãnh liên thất trước. Tắc nhánh này là mẫu nhồi máu thành trước.",
  },
  {
    q: "Vì sao atlas tô động mạch phổi màu xanh, không phải đỏ?",
    options: [
      "Vì máu trong động mạch phổi nghèo oxy",
      "Vì đó là tĩnh mạch",
      "Vì phổi không có mạch",
      "Vì mô hình bị lỗi màu",
    ],
    a: 0,
    topicId: "circ-pulm",
    explain: "Động mạch phổi mang máu nghèo oxy từ thất phải ra phổi. Tĩnh mạch phổi mới giàu oxy.",
  },
  {
    q: "Huyết khối tĩnh mạch chân muốn lên phổi thì đi qua buồng tim nào trước?",
    options: ["Tim phải", "Chỉ thất trái", "Chỉ nhĩ trái", "Xoang vành"],
    a: 0,
    topicId: "path-pe",
    explain: "Chủ dưới đổ vào nhĩ phải, rồi thất phải, rồi thân động mạch phổi.",
  },
  {
    q: "Van nào mở trong thì tâm thu để máu ra động mạch chủ?",
    options: ["Van động mạch chủ", "Van hai lá", "Van ba lá", "Van tĩnh mạch chủ"],
    a: 0,
    topicId: "circ-valves",
    explain: "Tâm thu thất: van nhĩ–thất đóng, van tổ chim của chủ và của phổi mở.",
  },
  {
    q: "Tĩnh mạch cửa đổ máu về đâu?",
    options: ["Gan", "Thẳng vào nhĩ phải", "Thẳng vào phổi", "Động mạch thận"],
    a: 0,
    topicId: "circ-viscera",
    explain: "Cửa gom máu ruột và lách về gan. Chủ dưới mới là đường hệ thống về tim.",
  },
  {
    q: "Bộ ba cổ điển của hẹp van động mạch chủ gồm đau ngực, khó thở và…",
    options: ["Ngất khi gắng sức", "Ho ra máu chắc chắn", "Sốt cao mỗi chiều", "Đau một ngón chân"],
    a: 0,
    topicId: "path-as",
    explain: "Ngất gắng sức là cờ đỏ của hẹp van chủ. Chẩn đoán bằng khám và siêu âm tim, không bằng atlas.",
  },
];

export const QUIZ_RESP: QuizItem[] = [
  {
    q: "Phổi phải có mấy thùy?",
    options: ["Ba", "Hai", "Một", "Năm"],
    a: 0,
    topicId: "resp-lobes",
    explain: "Phải: trên, giữa, dưới. Trái: trên và dưới. Trái không có thùy giữa.",
  },
  {
    q: "Dị vật hít vào thường rơi vào bên nào, và vì sao?",
    options: [
      "Phổi phải, vì phế quản phải ngắn, rộng và dốc hơn",
      "Phổi trái, vì phế quản trái thẳng đứng",
      "Luôn mắc ở thanh quản",
      "Luôn xuống thùy giữa trái",
    ],
    a: 0,
    topicId: "path-fb",
    explain: "Phế quản gốc phải hợp với khí quản một góc dốc hơn. Không có thùy giữa bên trái.",
  },
  {
    q: "Tràn khí màng phổi áp lực đẩy khí quản về phía nào?",
    options: ["Sang bên đối diện với bên tràn khí", "Về phía bên tràn khí", "Không bao giờ lệch", "Xuống cơ hoành"],
    a: 0,
    topicId: "path-ptx",
    explain: "Áp lực bên tràn khí đẩy trung thất sang bên lành. Đây là cấp cứu.",
  },
  {
    q: "Phân thùy phổi nghĩa là gì trên atlas này?",
    options: [
      "Vùng nhu mô có phế quản và mạch riêng",
      "Một xương sườn",
      "Một buồng tim",
      "Một van tĩnh mạch",
    ],
    a: 0,
    topicId: "resp-seg",
    explain: "Cắt phân thùy được vì ranh giới mạch–phế quản. Bật Chi tiết để hiện các mảnh này.",
  },
  {
    q: "Gõ đục và rung thanh giảm vùng thấp một bên hợp với mẫu nào hơn?",
    options: ["Tràn dịch màng phổi", "Hen đang khò khè hai phổi", "Hẹp van chủ", "Gãy xương đùi"],
    a: 0,
    topicId: "path-eff",
    explain: "Dịch làm đầy khoang màng phổi nên rung thanh giảm. Phổi đặc của viêm phổi thường làm rung thanh tăng.",
  },
  {
    q: "Vì sao cơn hen không nhìn thấy là một chỗ gãy trên mô hình?",
    options: [
      "Vì hen là co thắt chức năng của phế quản nhỏ, mô hình là đường thở bình thường",
      "Vì phổi không liên quan hen",
      "Vì hen chỉ ở xương sườn",
      "Vì mô hình thiếu phổi trái",
    ],
    a: 0,
    topicId: "path-asthma",
    explain: "Atlas chỉ hình dạng lúc không co thắt. Im phổi trong cơn là dấu nặng, không phải hết bệnh.",
  },
];

const PHRASE: [RegExp, string][] = [
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
  [/bronchial cartilage/i, "sụn phế quản"],
];

function tidy(raw: string): string {
  return raw
    .replace(/^VH_[MF]_/i, "")
    .replace(/\.(l|r)$/i, "")
    .replace(/[_.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function capitalize(text: string): string {
  if (!text) return text;
  return text.charAt(0).toLocaleUpperCase("vi") + text.slice(1);
}

export function labelSystem(raw: string): { vi: string; latin: string } {
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
  if (!best) {
    vi = latin
      .replace(/segmental artery/gi, "động mạch phân thùy")
      .replace(/segmental vein/gi, "tĩnh mạch phân thùy")
      .replace(/segmental bronchus/gi, "phế quản phân thùy")
      .replace(/lobar artery/gi, "động mạch thùy")
      .replace(/lobar bronchus/gi, "phế quản thùy")
      .replace(/bronchopulmonary segment/gi, "phân thùy phổi")
      .replace(/artery/gi, "động mạch")
      .replace(/vein/gi, "tĩnh mạch")
      .replace(/bronchus/gi, "phế quản")
      .replace(/trachea/gi, "khí quản")
      .replace(/ of right lung/gi, " của phổi phải")
      .replace(/ of left lung/gi, " của phổi trái")
      .replace(/\bright\b/gi, "phải")
      .replace(/\bleft\b/gi, "trái")
      .replace(/\bsuperior\b/gi, "trên")
      .replace(/\binferior\b/gi, "dưới")
      .replace(/\banterior\b/gi, "trước")
      .replace(/\bposterior\b/gi, "sau")
      .replace(/\bmedial\b/gi, "trong")
      .replace(/\blateral\b/gi, "ngoài")
      .replace(/\bupper\b/gi, "trên")
      .replace(/\blower\b/gi, "dưới")
      .replace(/\bmiddle\b/gi, "giữa")
      .replace(/\bapical\b/gi, "đỉnh")
      .replace(/\bbasal\b/gi, "đáy");
  }
  return { vi: capitalize(vi), latin };
}

export function isFine(name: string): boolean {
  return /segmental|tertiary|lingular|basal|bronchopulmonary_segment|septal branch|perforat/i.test(
    name,
  );
}

export function isJunkName(name: string): boolean {
  return !name || /\?/.test(name) || /^mesh(\.|$)/i.test(name);
}

export type Tone =
  | "bone"
  | "muscle"
  | "other"
  | "artery"
  | "vein"
  | "pulmArtery"
  | "pulmVein"
  | "heart"
  | "valve"
  | "lung"
  | "air";

export function toneOf(name: string): Tone {
  const n = name.toLowerCase();
  if (/leaflet|atrioventricular valve|_valve\b|mitral_valve|tricuspid_valve|aortic_valve|pulmonary_valve/.test(n)) {
    return "valve";
  }
  if (
    /pulmonary vein|vein of (the )?(right|left) lung|vein of right lung|vein of left lung/.test(n)
  ) {
    return "pulmVein";
  }
  if (
    /pulmonary artery|pulmonary trunk|lobar artery|segmental artery of .+lung|lingular artery|bifurcation of pulmonary/.test(
      n,
    )
  ) {
    return "pulmArtery";
  }
  if (/vein|sinus|cava|azygos|saphenous|portal/.test(n)) return "vein";
  if (/artery|aorta|aortic arch|brachiocephalic trunk|\btrunk\b/.test(n)) return "artery";
  if (/atrium|ventricle|papillary|cardiac chamber|septum|vh_m_heart\b/.test(n)) return "heart";
  if (/bronchopulmonary_segment|upper_lobe|lower_lobe|middle_lobe|lungs_|pleura|\blobe of\b/.test(n)) {
    return "lung";
  }
  if (/bronch|trache|carina|cartilage|epiglot|arytenoid|cricoid|corniculate/.test(n)) return "air";
  if (/lung|lobe|hilum/.test(n)) return "lung";
  return "other";
}
