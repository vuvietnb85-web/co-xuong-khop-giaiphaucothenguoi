import { EXTRA_TOPICS, QUIZ_CIRC, QUIZ_RESP } from "@/lib/anatomy/systems";

export type System = "cxk" | "circ" | "resp";
export type Tab =
  | "bone"
  | "muscle"
  | "joint"
  | "path"
  | "quiz"
  | "heart"
  | "vessel"
  | "lung"
  | "airway";
export type Kind = "bone" | "muscle" | "other";
export type Side = "trái" | "phải" | "giữa";
export type Rom = "elbow" | "knee" | "shoulder";
export type Board = { see: string; step: string; flag: string };

export type Topic = {
  id: string;
  system?: System;
  tab: Exclude<Tab, "quiz">;
  vi: string;
  latin: string;
  body: string;
  rom?: Rom;
  board?: Board;
  match: (name: string) => boolean;
};

const ribN: Record<string, string> = {
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
  twelfth: "12",
};

const CXK: Topic[] = [
  {
    id: "bone-skull",
    tab: "bone",
    vi: "Hộp sọ",
    latin: "Cranium",
    body: "Hộp sọ gồm sọ não (trán, đỉnh, thái dương, chẩm, bướm, sàng) và khối xương mặt. Hộp sọ bảo vệ não, tạo ổ mắt, hốc mũi và khớp với hàm dưới. Gãy xương sọ hoặc tụ máu nội sọ là cấp cứu — atlas này chỉ để nhận diện xương.",
    match: (n) =>
      /frontal|parietal|occipital|temporal|sphenoid|ethmoid|zygomatic|nasal bone|maxilla|lacrimal|palatine|inferior nasal|vomer/i.test(
        n,
      ),
  },
  {
    id: "bone-mandible",
    tab: "bone",
    vi: "Xương hàm dưới",
    latin: "Mandibula",
    body: "Xương lẻ, di động, khớp với xương thái dương tại khớp thái dương–hàm. Nơi bám cơ cắn và cơ thái dương. Trật khớp há miệng hoặc gãy góc hàm hay gặp sau chấn thương.",
    match: (n) => /mandible/i.test(n),
  },
  {
    id: "bone-cspine",
    tab: "bone",
    vi: "Cột sống cổ",
    latin: "Vertebrae C1–C7",
    body: "Bảy đốt. C1 (đốt đội) mang sọ, C2 (đốt trục) có mỏm nha cho phép quay đầu. Đĩa đệm và lỗ liên hợp hẹp dần theo tuổi, dễ chèn rễ C5–C7. Sau chấn thương cổ: không xoay người, cố định và đi cấp cứu.",
    match: (n) => /atlas|axis|vertebra c/i.test(n),
  },
  {
    id: "bone-tspine",
    tab: "bone",
    vi: "Cột sống ngực",
    latin: "Vertebrae T1–T12",
    body: "Mười hai đốt khớp với xương sườn, tạo lồng ngực. Gù sinh lý. Gãy lún đốt ngực ở người loãng xương có thể chỉ là đau lưng mới, không cần ngã mạnh.",
    match: (n) => /vertebra t/i.test(n),
  },
  {
    id: "bone-lspine",
    tab: "bone",
    vi: "Cột sống thắt lưng",
    latin: "Vertebrae L1–L5",
    body: "Năm đốt chịu lực thân mình. Đĩa L4–L5 và L5–S1 thoát vị nhiều nhất, có thể đau lan theo rễ thần kinh xuống chân. Đau lưng cơ năng phổ biến hơn thoát vị — không tự kết luận chỉ vì đau.",
    match: (n) => /vertebra l/i.test(n),
  },
  {
    id: "bone-ribs",
    tab: "bone",
    vi: "Lồng ngực",
    latin: "Costae et sternum",
    body: "Mười hai đôi xương sườn, xương ức (cán, thân, mũi kiếm) và sụn sườn. Sườn 1–7 gắn ức bằng sụn riêng; 8–10 gắn cung sụn; 11–12 sườn cụt. Gãy sườn gây đau khi hít sâu; nhiều sườn gãy có thể giảm thông khí.",
    match: (n) => /rib|sternum|manubrium|xiphoid|costal cartilage/i.test(n),
  },
  {
    id: "bone-clavicle",
    tab: "bone",
    vi: "Xương đòn",
    latin: "Clavicula",
    body: "Xương dài hình chữ S, nối ức với mỏm cùng vai. Là xương gãy thường gặp khi ngã chống tay hoặc va đập vai. Nổi gồ dưới da, vai sệ xuống.",
    match: (n) => /^clavicle/i.test(n),
  },
  {
    id: "bone-scapula",
    tab: "bone",
    vi: "Xương bả vai",
    latin: "Scapula",
    body: "Xương dẹt sau ngực, có ổ chảo khớp với chỏm xương cánh tay, mỏm cùng vai và mỏm quạ. Hố trên gai và dưới gai là nơi xuất phát chóp xoay.",
    match: (n) => /^scapula/i.test(n),
  },
  {
    id: "bone-humerus",
    tab: "bone",
    vi: "Xương cánh tay",
    latin: "Humerus",
    body: "Xương dài của cánh tay. Chỏm cầu khớp vai; đầu dưới có ròng rọc và lồi cầu khớp khuỷu, cùng lồi cầu ngoài — nơi bám nhóm duỗi cổ tay. Gãy thân có thể tổn thương thần kinh quay.",
    match: (n) => /^humerus/i.test(n),
  },
  {
    id: "bone-forearm",
    tab: "bone",
    vi: "Xương quay và xương trụ",
    latin: "Radius et ulna",
    body: "Xương trụ vững phía khuỷu (mỏm khuỷu), xương quay vững phía cổ tay và xoay được quanh trụ khi sấp–ngửa. Ngã chống bàn tay hay gãy đầu dưới xương quay (kiểu Colles): biến dạng lưng đĩa úp.",
    match: (n) => /^(radius|ulna)/i.test(n),
  },
  {
    id: "bone-hip",
    tab: "bone",
    vi: "Xương chậu",
    latin: "Os coxae",
    body: "Mỗi bên do xương chậu hông, ngồi và mu hợp lại, tạo ổ cối nhận chỏm xương đùi. Vòng chậu bảo vệ tạng và truyền lực từ thân xuống chi. Gãy vòng chậu sau chấn thương năng lượng cao là nặng.",
    match: (n) => /hip bone|ilium|ischium|pubis/i.test(n),
  },
  {
    id: "bone-femur",
    tab: "bone",
    vi: "Xương đùi",
    latin: "Femur",
    body: "Xương dài nhất. Cổ xương đùi nối chỏm với thân, là điểm yếu ở người cao tuổi loãng xương. Gãy cổ xương đùi: chân ngắn và xoay ngoài, không đứng được — đây là cấp cứu chỉnh hình, không phải đau khớp thông thường.",
    match: (n) => /^femur/i.test(n),
  },
  {
    id: "bone-patella",
    tab: "bone",
    vi: "Xương bánh chè",
    latin: "Patella",
    body: "Xương vừng trong gân cơ tứ đầu, tăng đòn bẩy duỗi gối và bảo vệ mặt trước khớp. Trật bánh chè thường lệch ra ngoài khi xoay người, gối gấp.",
    match: (n) => /^patella/i.test(n),
  },
  {
    id: "bone-leg",
    tab: "bone",
    vi: "Xương chày và xương mác",
    latin: "Tibia et fibula",
    body: "Xương chày chịu lực chính, mặt trên là mâm chày khớp với lồi cầu đùi. Xương mác mảnh, phía ngoài, cùng chày tạo ổ mắt cá cho xương sên. Gãy mâm chày ảnh hưởng mặt khớp, dễ thoái hóa sau này.",
    match: (n) => /^(tibia|fibula)/i.test(n),
  },
  {
    id: "bone-foot",
    tab: "bone",
    vi: "Xương sên và xương gót",
    latin: "Talus et calcaneus",
    body: "Xương sên truyền lực từ cẳng chân xuống bàn chân, không có chỗ bám cơ. Xương gót là xương lớn nhất bàn chân, nơi bám gân gót. Bong gân cổ chân chủ yếu đứt một phần dây chằng mác–sên trước, không phải gãy xương — nhưng cần loại trừ gãy nếu không chịu được lực.",
    match: (n) => /^(talus|calcaneus)/i.test(n),
  },
  {
    id: "muscle-pec",
    tab: "muscle",
    vi: "Cơ ngực lớn",
    latin: "M. pectoralis major",
    body: "Ba phần: đòn, ức–sườn và bụng. Khép và xoay trong cánh tay, phần đòn còn gấp vai. Rách gân chỗ bám cánh tay gặp ở người tập đẩy tạ nặng: bầm ngực, mất nếp nách trước.",
    match: (n) => /pectoralis major/i.test(n),
  },
  {
    id: "muscle-delt",
    tab: "muscle",
    vi: "Cơ delta",
    latin: "M. deltoideus",
    body: "Ba bó: đòn (gấp), cùng vai (dạng), gai vai (duỗi). Là cơ dạng vai chính sau khi chóp xoay đã khởi động. Tiêm hoặc chấn thương thần kinh mũ làm teo delta, khó dạng vai.",
    match: (n) => /deltoid/i.test(n),
  },
  {
    id: "muscle-biceps",
    tab: "muscle",
    vi: "Cơ nhị đầu cánh tay",
    latin: "M. biceps brachii",
    body: "Đầu dài và đầu ngắn. Gấp khuỷu khi bàn tay ngửa, và ngửa cẳng tay. Đầu dài góp phần giữ chỏm xương cánh tay. Đứt đầu dài: bóng cơ tụ xuống cánh tay, thường ở người lớn tuổi hoặc kéo nặng.",
    match: (n) => /biceps brachii/i.test(n),
  },
  {
    id: "muscle-triceps",
    tab: "muscle",
    vi: "Cơ tam đầu cánh tay",
    latin: "M. triceps brachii",
    body: "Ba đầu (dài, ngoài, trong) hợp một gân bám mỏm khuỷu. Là cơ duỗi khuỷu chính. Đứt gân: không duỗi được khuỷu chống trọng lực.",
    match: (n) => /triceps brachii/i.test(n),
  },
  {
    id: "muscle-cuff",
    tab: "muscle",
    vi: "Chóp xoay",
    latin: "Cuffia rotatorum",
    body: "Bốn cơ: trên gai, dưới gai, tròn bé và dưới vai. Ép chỏm vào ổ chảo và xoay vai. Cơ trên gai đi trong khoảng hẹp dưới mỏm cùng vai nên hay viêm gân và rách. Đau khi dạng tay ngang vai, đau đêm nằm nghiêng bên đó.",
    match: (n) => /supraspinatus|infraspinatus|teres minor|subscapularis/i.test(n),
  },
  {
    id: "muscle-trap",
    tab: "muscle",
    vi: "Cơ thang",
    latin: "M. trapezius",
    body: "Phần xuống (nâng vai), ngang (kéo xương bả) và lên (hạ xương bả, xoay ổ chảo lên). Thường căng khi ngồi cúi lâu. Liệt thần kinh phụ làm vai sệ, khó dang tay qua đầu.",
    match: (n) => /trapezius/i.test(n),
  },
  {
    id: "muscle-lat",
    tab: "muscle",
    vi: "Cơ lưng rộng",
    latin: "M. latissimus dorsi",
    body: "Bám từ mạc ngực-thắt lưng và mào chậu, kéo lên rãnh nhị đầu xương cánh tay. Duỗi, khép và xoay trong vai. Là cơ kéo người lên khi bám xà.",
    match: (n) => /latissimus dorsi/i.test(n),
  },
  {
    id: "muscle-quad",
    tab: "muscle",
    vi: "Cơ tứ đầu đùi",
    latin: "M. quadriceps femoris",
    body: "Bốn đầu: thẳng đùi, rộng ngoài, rộng trong, rộng giữa. Hợp gân qua bánh chè xuống lồi củ chày. Duỗi gối; thẳng đùi còn gấp háng. Teo rộng trong làm bánh chè dễ lệch ngoài.",
    match: (n) => /rectus femoris|vastus lateralis|vastus medialis|vastus intermedius|quadriceps/i.test(n),
  },
  {
    id: "muscle-ham",
    tab: "muscle",
    vi: "Cơ hamstring",
    latin: "Mm. ischiocrurales",
    body: "Nhị đầu đùi, bán gân và bán mạc. Gấp gối và duỗi háng. Căng hoặc rách khi chạy nước rút: đau mặt sau đùi, bầm muộn. Khác với đau rễ thần kinh lan từ lưng.",
    match: (n) => /biceps femoris|semitendinosus|semimembranosus/i.test(n),
  },
  {
    id: "muscle-calf",
    tab: "muscle",
    vi: "Cơ sinh đôi và cơ dép",
    latin: "M. gastrocnemius et soleus",
    body: "Sinh đôi có hai đầu, bắt từ lồi cầu đùi, nên gấp gối và gập lòng cổ chân. Cơ dép nằm sâu, chỉ gập lòng cổ chân, là bơm tĩnh mạch khi đi. Cả hai hợp gân gót.",
    match: (n) => /gastrocnemius|soleus/i.test(n),
  },
  {
    id: "muscle-glute",
    tab: "muscle",
    vi: "Cơ mông",
    latin: "Mm. glutei",
    body: "Mông lớn duỗi và xoay ngoài háng. Mông nhỡ và mông bé dạng háng, giữ khung chậu khi đứng một chân. Yếu mông nhỡ: khung chậu đổ khi đứng chân đó, dáng đi Trendelenburg.",
    match: (n) => /gluteus maximus|gluteus medius|gluteus minimus/i.test(n),
  },
  {
    id: "joint-shoulder",
    tab: "joint",
    vi: "Khớp vai",
    latin: "Articulatio humeri",
    rom: "shoulder",
    body: "Ổ chảo nông, biên độ rộng nhất cơ thể, đổi lại dễ trật. Trật lần đầu sau chấn thương là cấp cứu chỉnh hình — không tự kéo. Chóp xoay và sụn viền giữ chỏm.",
    match: (n) => /^(humerus|scapula|clavicle)/i.test(n),
  },
  {
    id: "joint-elbow",
    tab: "joint",
    vi: "Khớp khuỷu",
    latin: "Articulatio cubiti",
    rom: "elbow",
    body: "Ba khớp trong một bao: cánh tay–trụ, cánh tay–quay, quay–trụ trên. Gấp duỗi ở khuỷu, sấp ngửa ở khớp quay. Mỏm khuỷu là mốc duỗi. Trật khuỷu thường sau ngã chống tay.",
    match: (n) => /^(humerus|radius|ulna)/i.test(n),
  },
  {
    id: "joint-wrist",
    tab: "joint",
    vi: "Khớp cổ tay",
    latin: "Articulatio radiocarpea",
    body: "Đầu dưới xương quay khớp hàng xương cổ tay gần. Xương thuyền là xương cổ tay hay gãy nhất khi ngã chống tay, dễ hoại tử nếu bỏ sót vì đau lúc đầu có thể nhẹ.",
    match: (n) => /^(radius|scaphoid|lunate)/i.test(n),
  },
  {
    id: "joint-hip",
    tab: "joint",
    vi: "Khớp háng",
    latin: "Articulatio coxae",
    body: "Ổ cối sâu, vững hơn vai. Gãy cổ xương đùi ở người già hay gặp hơn trật. Trật háng sau chấn thương năng lượng cao, chân ngắn xoay trong — khác gãy cổ xương đùi (xoay ngoài).",
    match: (n) => /^(femur|hip bone)/i.test(n) || /ilium|ischium|pubis/i.test(n),
  },
  {
    id: "joint-knee",
    tab: "joint",
    vi: "Khớp gối",
    latin: "Articulatio genus",
    rom: "knee",
    body: "Lồi cầu đùi trên mâm chày, bánh chè ở trước. Dây chằng chéo và bên, cùng sụn chêm, giữ vững. Sưng nhanh sau xoay người gợi ý máu trong khớp — cần khám, không phải chỉ chườm.",
    match: (n) => /^(femur|tibia|patella)/i.test(n),
  },
  {
    id: "joint-ankle",
    tab: "joint",
    vi: "Khớp cổ chân",
    latin: "Articulatio talocruralis",
    body: "Ròng rọc xương sên kẹp giữa hai mắt cá. Bong gân mặt ngoài (dây chằng mác–sên trước) là thường gặp. Không chịu được lực hoặc đau đúng mắt cá thì cần loại trừ gãy.",
    match: (n) => /^(tibia|fibula|talus)/i.test(n),
  },
  {
    id: "joint-cspine",
    tab: "joint",
    vi: "Khớp cột sống cổ",
    latin: "Articulationes cervicales",
    body: "C1–C2 quay đầu. Các đốt dưới gấp duỗi. Sau chấn thương: đau cổ, tê tay hoặc yếu chân — cố định, không tự nắn. Vẹo cổ cấp do cơ khác với chấn thương.",
    match: (n) => /atlas|axis|vertebra c/i.test(n),
  },
  {
    id: "joint-lspine",
    tab: "joint",
    vi: "Khớp cột sống thắt lưng",
    latin: "Articulationes lumbales",
    body: "Đĩa và khớp diện sau chia sẻ lực. Đau lưng cơ năng phổ biến. Dấu hiệu rễ (đau lan đúng đường, yếu, tê) mới nghĩ đĩa. Bí tiểu và tê yên ngựa là cấp cứu.",
    match: (n) => /vertebra l|sacrum/i.test(n),
  },
  {
    id: "path-neck-femur",
    tab: "path",
    vi: "Gãy cổ xương đùi",
    latin: "Fractura colli femoris",
    body: "Người già ngã, không đứng được. Chân bên gãy ngắn và xoay ngoài. Khác trật háng sau (thường xoay trong, sau chấn thương mạnh ở người trẻ). Đây là cấp cứu chỉnh hình vì nguy cơ hoại tử chỏm và biến chứng nằm lâu.",
    match: (n) => /^femur/i.test(n),
  },
  {
    id: "path-acl",
    tab: "path",
    vi: "Đứt dây chằng chéo trước",
    latin: "Ruptura ligamenti cruciati anterioris",
    body: "Xoay người khi bàn chân trụ, nghe tiếng rắc, sưng gối trong vài giờ. Chéo trước ngăn xương chày trượt ra trước so với đùi. Nhiều người đi lại được sau đó nhưng lỏng gối khi xoay. Chẩn đoán bằng khám và cộng hưởng, không bằng mô hình.",
    match: (n) => /^(femur|tibia)/i.test(n),
  },
  {
    id: "path-shoulder",
    tab: "path",
    vi: "Trật khớp vai",
    latin: "Luxatio humeri",
    body: "Thường chỏm ra trước-dưới sau tư thế dạng xoay ngoài. Vai vuông, mất chỏm ở chỗ cũ, cánh tay khép. Trật lần đầu cần nắn tại cơ sở y tế sau khi loại trừ gãy — không tự kéo trên sân.",
    match: (n) => /^(humerus|scapula)/i.test(n),
  },
  {
    id: "path-cts",
    tab: "path",
    vi: "Hội chứng ống cổ tay",
    latin: "Syndroma canalis carpi",
    body: "Thần kinh giữa bị chèn trong ống cổ tay. Tê ngón cái, trỏ, giữa, thường đêm, rung tay thì đỡ. Teo mô cái là giai đoạn muộn. Cần phân biệt chèn rễ cổ C6–C7. Nẹp đêm là bước đầu; đo dẫn truyền thần kinh xác nhận.",
    match: (n) => /^(radius|scaphoid)/i.test(n) || /flexor carpi|flexor digitorum|flexor pollicis/i.test(n),
  },
  {
    id: "path-disc",
    tab: "path",
    vi: "Thoát vị đĩa đệm thắt lưng",
    latin: "Prolapsus disci intervertebralis",
    body: "Nhân nhầy đĩa lệch, thường L4–L5 hoặc L5–S1, chèn rễ. Đau lan theo đường đi của rễ, có thể tê và yếu cơ (khó kiễng gót hoặc khó nâng mũi chân). Đa số đỡ trong vài tuần với vận động hợp lý. Bí tiểu, tê vùng yên ngựa, yếu hai chân: nghĩ hội chứng đuôi ngựa — cấp cứu.",
    match: (n) => /vertebra l|sacrum/i.test(n),
  },
  {
    id: "path-cspine",
    tab: "path",
    vi: "Thoái hóa cột sống cổ",
    latin: "Spondylosis cervicalis",
    body: "Gai xương và đĩa thoái hóa làm hẹp lỗ liên hợp hoặc ống sống. Đau cổ gáy, có thể đau rễ xuống tay hoặc — nếu hẹp ống — đi không vững, tê hai tay. Khác với vẹo cổ cấp do cơ. Chụp chỉ có ý nghĩa khi khám thần kinh bất thường, không chụp vì mọi cơn đau cổ.",
    match: (n) => /atlas|axis|vertebra c/i.test(n),
  },
  {
    id: "path-osteo",
    tab: "path",
    vi: "Loãng xương",
    latin: "Osteoporosis",
    body: "Mất khối lượng và vi cấu trúc xương, im lặng đến khi gãy: cổ xương đùi, đốt sống, đầu dưới xương quay. Gãy lún đốt sống có thể không do ngã. Chẩn đoán bằng đo mật độ xương, không bằng mô hình. Phòng: chịu lực (đi bộ), đủ đạm, vitamin D theo chỉ định, không hút thuốc.",
    match: (n) => /vertebra|femur|radius/i.test(n),
  },
  {
    id: "path-colles",
    tab: "path",
    vi: "Gãy đầu dưới xương quay",
    latin: "Fractura radii typus Colles",
    body: "Ngã chống bàn tay duỗi. Đầu dưới xương quay di lệch ra sau, cổ tay biến dạng lưng đĩa úp. Cần nắn và bất động đúng; lệch khớp quay–trụ dưới để lại hạn chế sấp ngửa. Ở xương loãng, cùng một cú ngã có thể gãy cả háng — luôn hỏi người già có đứng được không.",
    match: (n) => /^radius/i.test(n),
  },
  {
    id: "path-calf",
    tab: "path",
    vi: "Rách cơ sinh đôi",
    latin: "Ruptura gastrocnemii",
    body: "Thường đầu trong, khi bật nhảy hoặc tăng tốc: đau như bị đá vào bắp chân, có thể bầm xuống cổ chân sau vài ngày. Khác đứt gân gót (hõm trên gót, không kiễng được một chân, test Thompson). Nghỉ tương đối, đi sớm trong đau chịu được, không nằm bất động lâu.",
    match: (n) => /gastrocnemius|soleus/i.test(n),
  },
];

export const TOPICS: Topic[] = [...CXK, ...EXTRA_TOPICS];

export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((t) => [t.id, t]),
);

export type QuizItem = {
  q: string;
  options: string[];
  a: number;
  topicId: string;
  explain: string;
};

export const QUIZ: QuizItem[] = [
  {
    q: "Cơ nào của chóp xoay đi dưới mỏm cùng vai và hay rách nhất?",
    options: ["Cơ trên gai", "Cơ thẳng bụng", "Cơ sinh đôi", "Cơ cắn"],
    a: 0,
    topicId: "muscle-cuff",
    explain: "Cơ trên gai khởi động dạng vai và chui qua khoảng dưới cùng vai — chỗ hẹp cơ học.",
  },
  {
    q: "Gãy cổ xương đùi ở người già sau ngã thường thấy chân bên gãy…",
    options: [
      "Dài ra và xoay trong",
      "Ngắn lại và xoay ngoài",
      "Không đổi tư thế",
      "Gấp cứng vào bụng",
    ],
    a: 1,
    topicId: "path-neck-femur",
    explain: "Cơ xoay ngoài và cơ thắt lưng kéo đoạn trên; chân nhìn ngắn và đổ ra ngoài. Đây là cấp cứu.",
  },
  {
    q: "Dây chằng chéo trước chủ yếu ngăn điều gì?",
    options: [
      "Bánh chè lệch lên trên",
      "Xương chày trượt ra trước so với đùi",
      "Sườn lệch khỏi ức",
      "Xương đòn hạ thấp",
    ],
    a: 1,
    topicId: "path-acl",
    explain: "Chéo trước đi từ mặt trong lồi cầu đùi ngoài tới diện trước gai mâm chày.",
  },
  {
    q: "Đĩa đệm thoát vị gây đau lan chân thường nhất ở tầng nào?",
    options: ["C1–C2", "T1–T2", "L4–L5 hoặc L5–S1", "Xương sườn 12"],
    a: 2,
    topicId: "path-disc",
    explain: "Hai tầng thấp nhất chịu lực cắt lớn nhất của cột sống thắt lưng.",
  },
  {
    q: "Khớp nào dễ trật nhất vì ổ nông?",
    options: ["Khớp háng", "Khớp vai", "Khớp gối", "Khớp sọ–C1"],
    a: 1,
    topicId: "joint-shoulder",
    explain: "Ổ chảo chỉ ôm một phần chỏm. Vai đổi lại bằng biên độ rất rộng.",
  },
  {
    q: "Cơ tứ đầu đùi có chức năng chính với khớp gối là…",
    options: ["Gấp gối", "Duỗi gối", "Xoay trong cổ chân", "Khép các ngón"],
    a: 1,
    topicId: "muscle-quad",
    explain: "Bốn đầu hợp gân bám qua bánh chè xuống lồi củ chày, duỗi gối.",
  },
  {
    q: "Tê ngón cái, trỏ, giữa về đêm gợi ý chèn thần kinh nào?",
    options: ["Thần kinh giữa trong ống cổ tay", "Thần kinh mũ", "Thần kinh mác nông", "Thần kinh phụ"],
    a: 0,
    topicId: "path-cts",
    explain: "Thần kinh giữa qua ống cổ tay. Rễ cổ cũng có thể tê tay — cần khám phân biệt.",
  },
  {
    q: "Loãng xương hay gãy im lặng ở đâu, đôi khi không cần ngã mạnh?",
    options: ["Xương bánh chè", "Đốt sống", "Xương móng", "Xương bướm"],
    a: 1,
    topicId: "path-osteo",
    explain: "Gãy lún thân đốt sống, cùng cổ xương đùi và đầu dưới xương quay, là ba vị trí điển hình.",
  },
];

export function quizOf(system: System): QuizItem[] {
  if (system === "circ") return QUIZ_CIRC;
  if (system === "resp") return QUIZ_RESP;
  return QUIZ;
}

const PHRASES: [RegExp, string, string][] = [
  [/atlas/i, "Đốt đội C1", "Atlas"],
  [/axis/i, "Đốt trục C2", "Axis"],
  [/humerus/i, "Xương cánh tay", "Humerus"],
  [/femur/i, "Xương đùi", "Femur"],
  [/patella/i, "Xương bánh chè", "Patella"],
  [/tibia/i, "Xương chày", "Tibia"],
  [/fibula/i, "Xương mác", "Fibula"],
  [/radius/i, "Xương quay", "Radius"],
  [/ulna/i, "Xương trụ", "Ulna"],
  [/scapula/i, "Xương bả vai", "Scapula"],
  [/clavicle/i, "Xương đòn", "Clavicula"],
  [/mandible/i, "Xương hàm dưới", "Mandibula"],
  [/hip bone/i, "Xương chậu", "Os coxae"],
  [/sacrum/i, "Xương cùng", "Os sacrum"],
  [/coccyx/i, "Xương cụt", "Os coccygis"],
  [/talus/i, "Xương sên", "Talus"],
  [/calcaneus/i, "Xương gót", "Calcaneus"],
  [/frontal bone/i, "Xương trán", "Os frontale"],
  [/parietal/i, "Xương đỉnh", "Os parietale"],
  [/occipital/i, "Xương chẩm", "Os occipitale"],
  [/temporal bone/i, "Xương thái dương", "Os temporale"],
  [/sphenoid/i, "Xương bướm", "Os sphenoidale"],
  [/ethmoid/i, "Xương sàng", "Os ethmoidale"],
  [/zygomatic/i, "Xương gò má", "Os zygomaticum"],
  [/maxilla/i, "Xương hàm trên", "Maxilla"],
  [/nasal bone/i, "Xương mũi", "Os nasale"],
  [/manubrium/i, "Cán xương ức", "Manubrium sterni"],
  [/xiphoid/i, "Mũi kiếm xương ức", "Processus xiphoideus"],
  [/body of sternum|sternum/i, "Thân xương ức", "Corpus sterni"],
  [/pectoralis major/i, "Cơ ngực lớn", "M. pectoralis major"],
  [/pectoralis minor/i, "Cơ ngực bé", "M. pectoralis minor"],
  [/deltoid/i, "Cơ delta", "M. deltoideus"],
  [/biceps brachii/i, "Cơ nhị đầu cánh tay", "M. biceps brachii"],
  [/triceps brachii/i, "Cơ tam đầu cánh tay", "M. triceps brachii"],
  [/supraspinatus/i, "Cơ trên gai", "M. supraspinatus"],
  [/infraspinatus/i, "Cơ dưới gai", "M. infraspinatus"],
  [/subscapularis/i, "Cơ dưới vai", "M. subscapularis"],
  [/teres minor/i, "Cơ tròn bé", "M. teres minor"],
  [/teres major/i, "Cơ tròn lớn", "M. teres major"],
  [/trapezius/i, "Cơ thang", "M. trapezius"],
  [/latissimus dorsi/i, "Cơ lưng rộng", "M. latissimus dorsi"],
  [/rectus abdominis/i, "Cơ thẳng bụng", "M. rectus abdominis"],
  [/gluteus maximus/i, "Cơ mông lớn", "M. gluteus maximus"],
  [/gluteus medius/i, "Cơ mông nhỡ", "M. gluteus medius"],
  [/gluteus minimus/i, "Cơ mông bé", "M. gluteus minimus"],
  [/vastus lateralis/i, "Cơ rộng ngoài", "M. vastus lateralis"],
  [/vastus medialis/i, "Cơ rộng trong", "M. vastus medialis"],
  [/vastus intermedius/i, "Cơ rộng giữa", "M. vastus intermedius"],
  [/rectus femoris/i, "Cơ thẳng đùi", "M. rectus femoris"],
  [/biceps femoris/i, "Cơ nhị đầu đùi", "M. biceps femoris"],
  [/semitendinosus/i, "Cơ bán gân", "M. semitendinosus"],
  [/semimembranosus/i, "Cơ bán mạc", "M. semimembranosus"],
  [/gastrocnemius/i, "Cơ sinh đôi", "M. gastrocnemius"],
  [/soleus/i, "Cơ dép", "M. soleus"],
  [/tibialis anterior/i, "Cơ chày trước", "M. tibialis anterior"],
  [/sternocleidomastoid/i, "Cơ ức đòn chũm", "M. sternocleidomastoideus"],
  [/masseter/i, "Cơ cắn", "M. masseter"],
  [/temporalis/i, "Cơ thái dương", "M. temporalis"],
  [/iliacus/i, "Cơ chậu", "M. iliacus"],
  [/psoas major/i, "Cơ thắt lưng lớn", "M. psoas major"],
  [/sartorius/i, "Cơ may", "M. sartorius"],
  [/brachioradialis/i, "Cơ cánh tay–quay", "M. brachioradialis"],
  [/scaphoid/i, "Xương thuyền", "Os scaphoideum"],
];

export function baseName(raw: string): string {
  return raw.replace(/\.\d+$/g, "").trim();
}

export function labelOf(raw: string): { vi: string; latin: string } {
  const name = baseName(raw);
  const vert = name.match(/^vertebra\s+([ctl])(\d+)/i);
  if (vert) {
    const region = vert[1].toUpperCase();
    const place = region === "C" ? "cổ" : region === "T" ? "ngực" : "thắt lưng";
    return {
      vi: `Đốt sống ${place} ${region}${vert[2]}`,
      latin: `Vertebra ${region}${vert[2]}`,
    };
  }
  const rib = name.match(/^(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)\s+rib/i);
  if (rib) {
    const n = ribN[rib[1].toLowerCase()] ?? "";
    return { vi: `Xương sườn ${n}`, latin: `Costa ${n}` };
  }
  const cart = name.match(
    /^costal cartilage of the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)/i,
  );
  const cart2 = name.match(
    /^costal cartilage of (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth|eleventh|twelfth)/i,
  );
  const which = cart?.[1] ?? cart2?.[1];
  if (which) {
    const n = ribN[which.toLowerCase()] ?? "";
    return { vi: `Sụn sườn ${n}`, latin: `Cartilago costalis ${n}` };
  }
  for (const [re, vi, latin] of PHRASES) {
    if (re.test(name)) return { vi, latin };
  }
  if (/cartilage/i.test(name)) return { vi: "Sụn", latin: name };
  if (/muscle/i.test(name)) return { vi: "Cơ", latin: name };
  return { vi: name, latin: name };
}

export function bestTopic(name: string, tab: Topic["tab"]): Topic | null {
  return TOPICS.find((t) => t.tab === tab && t.match(name)) ?? null;
}

export function structureTopic(name: string, kind: Kind): Topic | null {
  const tab: Topic["tab"] = kind === "muscle" ? "muscle" : "bone";
  return bestTopic(name, tab) ?? TOPICS.find((t) => (t.system ?? "cxk") === "cxk" && t.tab !== "path" && t.match(name)) ?? null;
}

export function sideWord(side: Side): string {
  if (side === "giữa") return "";
  return side === "trái" ? "bên trái" : "bên phải";
}

export const DISCLAIMER =
  "Tài liệu giảng dạy. Không chẩn đoán, không kê đơn, không thay khám lâm sàng hay phim chụp. Không phải thiết bị y tế.";

export const TICKER =
  "ATLAS CXK  ·  CƠ XƯƠNG KHỚP  ·  TUẦN HOÀN  ·  HÔ HẤP  ·  Z-ANATOMY CC BY-SA 4.0  ·  BODYPARTS3D DBCLS CC BY-SA 2.1 JP  ·  VISIBLE HUMAN / HUBMAP CC BY 4.0  ·  CHỈ ĐỂ HỌC VÀ GIẢNG  ·  KHÔNG CHẨN ĐOÁN  ·  KHÔNG PHẢI THIẾT BỊ Y TẾ  ·  ĐAU NGỰC MỚI, KHÓ THỞ TĂNG, CHOÁNG LÀ ĐI CẤP CỨU  ·  ";

export const PATH_INTRO =
  "Chọn một mẫu để ôn. Atlas không biết triệu chứng của người đang cầm máy, không đo hẹp van, không thấy cục máu hay dịch màng phổi. Đối chiếu với bệnh án thật do thầy thuốc phụ trách.";
