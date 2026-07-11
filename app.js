const recipientName = document.querySelector("#recipient-name");
const message = document.querySelector("#message");
const previewName = document.querySelector("#preview-name");
const previewMessage = document.querySelector("#preview-message");
const importButton = document.querySelector("#import-button");
const importStatus = document.querySelector("#import-status");
const approveButton = document.querySelector("#approve-button");
const changesButton = document.querySelector("#changes-button");
const approvalChip = document.querySelector("#approval-chip");
const timeline = document.querySelector("#timeline");
const programForm = document.querySelector("#program-form");
const logoButton = document.querySelector("#logo-button");
const logoName = document.querySelector("#logo-name");
const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");
const personalizeButtons = document.querySelectorAll(".personalize-product");
const quoteButtons = document.querySelectorAll(".quote-product, .quote-trigger");
const volumeSelect = document.querySelector("#volume-select");
const startButtons = document.querySelectorAll(".start-program");
const personalizeJumpButtons = document.querySelectorAll(".personalize-jump");
const workspaceTabs = document.querySelectorAll(".workspace-tab");
const workspacePanels = document.querySelectorAll(".workspace-panel");
const budgetInput = document.querySelector("#budget");
const deliveryInput = document.querySelector("#delivery");
const recipientsInput = document.querySelector("#recipients");
const occasionSelect = document.querySelector("#occasion");
const metricBudget = document.querySelector("#metric-budget");
const metricPerRecipient = document.querySelector("#metric-per-recipient");
const metricDate = document.querySelector("#metric-date");
const metricStatus = document.querySelector("#metric-status");
const builderTier = document.querySelector("#budget-tier");
const builderRecipients = document.querySelector("#builder-recipients");
const builderTotal = document.querySelector("#builder-total");
const builderUnit = document.querySelector("#builder-unit");
const saveProgramButton = document.querySelector("#save-program-button");
const savedPrograms = document.querySelectorAll(".saved-program");
const validateRecipients = document.querySelector("#validate-recipients");
const recipientValidationNote = document.querySelector("#recipient-validation-note");
const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-links a");
const quoteDrawer = document.querySelector("#quote-drawer");
const drawerClose = document.querySelector("#drawer-close");
const sendQuote = document.querySelector("#send-quote");
const quoteForm = document.querySelector("#quote-form");
const quoteBudget = document.querySelector("#quote-budget");
const quoteNote = document.querySelector("#quote-note");
const guideOccasion = document.querySelector("#guide-occasion");
const guideBudget = document.querySelector("#guide-budget");
const guideVolume = document.querySelector("#guide-volume");
const recommendButton = document.querySelector("#recommend-button");
const recommendTitle = document.querySelector("#recommend-title");
const recommendReason = document.querySelector("#recommend-reason");
const viewRecommendation = document.querySelector("#view-recommendation");
const detailButtons = document.querySelectorAll(".detail-product");
const productDetailDrawer = document.querySelector("#product-detail-drawer");
const productDetailClose = document.querySelector("#product-detail-close");
const detailCategory = document.querySelector("#detail-category");
const detailTitle = document.querySelector("#detail-title");
const detailSummary = document.querySelector("#detail-summary");
const detailImage = document.querySelector("#detail-image");
const detailReasons = document.querySelector("#detail-reasons");
const detailPrice = document.querySelector("#detail-price");
const detailMoq = document.querySelector("#detail-moq");
const detailTimeline = document.querySelector("#detail-timeline");
const detailFit = document.querySelector("#detail-fit");
const detailCode = document.querySelector("#detail-code");
const detailMaterial = document.querySelector("#detail-material");
const detailSize = document.querySelector("#detail-size");
const detailFinish = document.querySelector("#detail-finish");
const detailPersonalization = document.querySelector("#detail-personalization");
const detailQuote = document.querySelector("#detail-quote");
const detailPersonalize = document.querySelector("#detail-personalize");
const detailAdvisor = document.querySelector("#detail-advisor");
const catalogSearch = document.querySelector("#catalog-search");
const collectionButtons = document.querySelectorAll(".collection-button");
const priceFilter = document.querySelector("#price-filter");
const timelineFilter = document.querySelector("#timeline-filter");
const personalizationFilter = document.querySelector("#personalization-filter");
const toggleAdvanced = document.querySelector("#toggle-advanced");
const advancedFilters = document.querySelector("#advanced-filters");
const resetFilters = document.querySelector("#reset-filters");
const resultsCount = document.querySelector("#results-count");
const resultsContext = document.querySelector("#results-context");
const emptyResults = document.querySelector("#empty-results");
const shortlistTray = document.querySelector("#shortlist-tray");
const shortlistCount = document.querySelector("#shortlist-count");
const shortlistSummary = document.querySelector("#shortlist-summary");
const compareShortlist = document.querySelector("#compare-shortlist");
const quoteShortlist = document.querySelector("#quote-shortlist");

const logoOptions = ["VIETCOMBANK", "FPT", "VINAMILK", "QUÀ VIỆT"];
let logoIndex = 0;
let activeCategory = "all";
let activeCollection = "all";
const shortlist = new Set();

const productDiscovery = {
  "Trophy Cup Kim Loại": { price: "over1500", timeline: "standard", collections: ["bestseller", "premium", "personalized"] },
  "Award Pha Lê Milano": { price: "500to1500", timeline: "fast", collections: ["bestseller", "fast", "premium", "personalized"] },
  "Bảng vinh danh thâm niên": { price: "under500", timeline: "fast", collections: ["bestseller", "fast", "personalized"] },
  "Huy chương giải đấu": { price: "under500", timeline: "fast", collections: ["fast"] },
  "Custom Branded Trophy/Award": { price: "over1500", timeline: "custom", collections: ["premium", "personalized"] },
  "Corporate Giftset": { price: "500to1500", timeline: "standard", collections: ["bestseller", "premium", "personalized"] },
  "Tết An Khang": { price: "500to1500", timeline: "standard", collections: ["bestseller", "personalized"] },
  "Tết Phú Quý": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Tết Đại Cát": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Tết Như Ý": { price: "500to1500", timeline: "standard", collections: ["bestseller", "personalized"] },
  "Tết Kim Phú": { price: "over1500", timeline: "custom", collections: ["premium", "personalized"] },
  "Tết Nghênh Xuân": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Tết Lộc Xanh": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Tết Song Vượng": { price: "under500", timeline: "standard", collections: ["bestseller", "personalized"] },
  "Tết Bình An": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Tết Vạn Phúc": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
};

const productMessages = {
  "Trophy Cup Kim Loại": "Vinh danh nhà vô địch và thành tích thi đua nổi bật",
  "Award Pha Lê Milano": "Vinh danh thành tích xuất sắc và tinh thần dẫn dắt đội nhóm",
  "Bảng vinh danh thâm niên": "Ghi nhận hành trình cống hiến và gắn bó cùng tổ chức",
  "Huy chương giải đấu": "Chúc mừng thành tích nổi bật tại mùa giải năm nay",
  "Custom Branded Trophy/Award": "Tôn vinh thành tựu theo dấu ấn thương hiệu riêng",
  "Corporate Giftset": "Trân trọng cảm ơn sự đồng hành và hợp tác bền vững",
  "Tết An Khang": "Kính chúc năm mới an khang, thịnh vượng và vạn sự như ý",
  "Tết Phú Quý": "Kính chúc năm mới phú quý, thành công và hợp tác bền lâu",
  "Tết Đại Cát": "Kính chúc năm mới đại cát, đại lợi và nhiều thành tựu mới",
  "Tết Như Ý": "Kính chúc năm mới vạn sự như ý, gia đình bình an",
  "Tết Kim Phú": "Trân trọng tri ân và kính chúc năm mới thịnh vượng",
  "Tết Nghênh Xuân": "Hân hoan đón xuân mới, kính chúc thành công và may mắn",
  "Tết Lộc Xanh": "Kính chúc năm mới xanh, khỏe mạnh và phát triển bền vững",
  "Tết Song Vượng": "Kính chúc năm mới song vượng, tài lộc và thành công",
  "Tết Bình An": "Kính chúc năm mới bình an, sức khỏe và hạnh phúc",
  "Tết Vạn Phúc": "Kính chúc năm mới vạn phúc, đủ đầy và gắn kết",
};

const productSpecs = {
  "Trophy Cup Kim Loại": { code: "QV-TROPHY", material: "Kim loại, đế composite hoặc gỗ", size: "Nhiều cỡ cho giải nhất, nhì, ba", finish: "Bảng tên khắc laser, logo hoặc nhãn màu" },
  "Award Pha Lê Milano": { code: "QV-MILANO", material: "Pha lê quang học, chi tiết kim loại", size: "Nhiều kích thước theo hạng mục", finish: "Khắc laser, in UV hoặc bảng tên" },
  "Bảng vinh danh thâm niên": { code: "QV-PLAQUE", material: "Gỗ, kim loại, mica hoặc pha lê", size: "Để bàn hoặc treo tường", finish: "Khắc laser, in UV, ép nhiệt" },
  "Huy chương giải đấu": { code: "QV-MEDAL", material: "Hợp kim, nhãn kim loại, dây vải", size: "Theo môn thi và cấp giải", finish: "Ép nhiệt, in màu, dây theo thương hiệu" },
  "Custom Branded Trophy/Award": { code: "QV-CUSTOM", material: "Kính, kim loại, acrylic, gỗ", size: "Phát triển theo concept được duyệt", finish: "Phối vật liệu, khắc và in theo nhận diện" },
  "Corporate Giftset": { code: "QV-GIFTSET", material: "Hộp cứng, giấy mỹ thuật và sản phẩm chọn lọc", size: "Theo cấu hình 2–6 sản phẩm", finish: "Sleeve, thiệp, ép kim hoặc in logo" },
  "Tết An Khang": { code: "QV-TET-AK", material: "Hộp cứng, trà, hạt và bánh", size: "Hộp 3 sản phẩm", finish: "Ép kim hoa mai, sleeve và thiệp" },
  "Tết Phú Quý": { code: "QV-TET-PQ", material: "Hộp cứng, trà, hạt, trái cây và chocolate", size: "Hộp 5 sản phẩm", finish: "Ép kim trên hộp và túi" },
  "Tết Đại Cát": { code: "QV-TET-DC", material: "Hộp cứng, đồ uống, cà phê, hạt và mứt", size: "Hộp 5 sản phẩm", finish: "Burgundy, champagne gold và thiệp VIP" },
  "Tết Như Ý": { code: "QV-TET-NY", material: "Hộp ngăn kéo, trà, hạt sen, bánh và trái cây", size: "Hộp 5 sản phẩm", finish: "Họa tiết hoa sen và thiệp" },
  "Tết Kim Phú": { code: "QV-TET-KP", material: "Hộp VIP, cà phê, đồ uống, hạt và chocolate", size: "Hộp 5 sản phẩm", finish: "Đen nhám, chi tiết vàng và huy hiệu" },
  "Tết Nghênh Xuân": { code: "QV-TET-NX", material: "Hộp cứng, trà, hạt, quả sấy, mật ong và tách", size: "Hộp 6 sản phẩm", finish: "Xanh hoàng gia, ép kim" },
  "Tết Lộc Xanh": { code: "QV-TET-LX", material: "Tre, cà phê, trà, hạt, trái cây và ly", size: "Hộp 6 sản phẩm", finish: "Khắc laser trên tre, sleeve giấy" },
  "Tết Song Vượng": { code: "QV-TET-SV", material: "Hộp lục giác, trà, hạt, mứt và chocolate", size: "Hộp 4 sản phẩm", finish: "Đỏ son, họa tiết vàng" },
  "Tết Bình An": { code: "QV-TET-BA", material: "Hộp cứng, trà thảo mộc, mật ong, hạt và bánh", size: "Hộp 6 sản phẩm", finish: "Ivory, xanh sage và thiệp sức khỏe" },
  "Tết Vạn Phúc": { code: "QV-TET-VP", material: "Hộp tròn, trà, hạt, mứt và vật phẩm may mắn", size: "Hộp 6 sản phẩm", finish: "Sơn đỏ, họa tiết mây vàng" },
};

const recommendations = {
  employee: {
    category: "award",
    title: "Award Pha Lê Milano + bảng tên cá nhân hóa",
    reason: "Phù hợp chương trình vinh danh nhân viên: trang trọng, dễ khắc tên, kiểm soát chi phí theo số lượng và dùng tốt trong lễ trao giải.",
  },
  partner: {
    category: "giftsets",
    title: "Corporate Giftset + sleeve thương hiệu",
    reason: "Phù hợp tri ân khách hàng/đối tác: cảm giác quà tặng cao cấp, có không gian cho logo, thông điệp và bao bì thương hiệu.",
  },
  event: {
    category: "medals",
    title: "Huy chương giải đấu + bộ cúp sự kiện",
    reason: "Phù hợp sự kiện có nhiều hạng mục: dễ chia bộ vàng/bạc/đồng, tối ưu chi phí số lượng lớn và giao nhanh trước ngày tổ chức.",
  },
  milestone: {
    category: "plaques",
    title: "Bảng vinh danh thâm niên + hộp trao tặng",
    reason: "Phù hợp cột mốc cá nhân: có diện tích cho tên, số năm, lời tri ân và chất liệu trang trọng để lưu giữ lâu dài.",
  },
  tet: {
    category: "tet",
    title: "Bộ sưu tập 10 giftset Tết + bao bì thương hiệu",
    reason: "Phù hợp mùa tri ân cuối năm: dễ chia nhóm người nhận, cá nhân hóa thiệp/sleeve và quản lý giao hàng theo danh sách.",
  },
};

function createTetDetail(name, price, moq, summary, contents, image) {
  return {
    category: "Quà Tặng Tết",
    summary,
    price,
    moq,
    timeline: "14 - 30 ngày, nên khóa mẫu sớm trước mùa cao điểm",
    fit: "Tri ân khách hàng, đối tác, lãnh đạo và nhân viên dịp Tết",
    reasons: [
      `Cấu hình ${contents} tạo trải nghiệm mở quà trọn vẹn.`,
      "Bao bì có thể đồng bộ logo, lời chúc và cấp độ người nhận.",
      "Hỗ trợ quản lý danh sách và phân tuyến giao hàng doanh nghiệp.",
    ],
    personalization: ["Logo trên hộp hoặc sleeve", "Thiệp chúc Tết", "Túi quà đồng bộ", "Phân nhóm người nhận"],
    image,
  };
}

const productDetails = {
  "Trophy Cup Kim Loại": {
    category: "Trophy",
    summary: "Trophy cup kim loại cho giải đấu, thi đua kinh doanh, đại hội đại lý và các chương trình cần sân khấu mạnh.",
    price: "650.000 - 2.800.000 VND",
    moq: "10+",
    timeline: "7 - 18 ngày sau duyệt mẫu",
    fit: "Sports events, sales champion, dealer awards",
    reasons: [
      "Tạo hình ảnh chiến thắng rõ ràng, dễ nhận biết từ xa trên sân khấu.",
      "Phù hợp giải nhất, champion, top performer và các hạng mục thi đua.",
      "Có thể đồng bộ nhiều kích thước cho giải nhất/nhì/ba.",
    ],
    personalization: ["Bảng tên trên đế", "Logo hoặc tên giải", "Kích thước theo hạng giải", "Hộp vận chuyển hoặc hộp trao tặng"],
    image: "assets/product-trophy.png",
  },
  "Award Pha Lê Milano": {
    category: "Award",
    summary: "Mẫu cúp trang trọng cho lễ vinh danh nhân viên, lãnh đạo dự án, đại lý hoặc đối tác xuất sắc.",
    price: "890.000 - 1.650.000 VND",
    moq: "10+",
    timeline: "7 - 14 ngày sau duyệt mẫu",
    fit: "Employee awards, sales awards, partner awards",
    reasons: [
      "Tạo cảm giác trang trọng trên sân khấu và trong ảnh truyền thông.",
      "Bề mặt phù hợp khắc tên, danh hiệu, logo và năm trao giải.",
      "Dễ chuẩn hóa theo nhiều cấp giải nhưng vẫn cá nhân hóa từng người nhận.",
    ],
    personalization: ["Logo doanh nghiệp", "Tên người nhận", "Danh hiệu / hạng mục", "Hộp trao tặng cao cấp"],
    image: "assets/quaviet-recognition-award.png",
  },
  "Bảng vinh danh thâm niên": {
    category: "Plaque",
    summary: "Kỷ vật lưu giữ lâu dài cho thâm niên, cột mốc cá nhân và đóng góp nổi bật.",
    price: "320.000 - 980.000 VND",
    moq: "20+",
    timeline: "7 - 12 ngày sau duyệt nội dung",
    fit: "Service awards, milestone recognition, school honors",
    reasons: [
      "Có diện tích hiển thị nhiều nội dung tri ân hơn cúp nhỏ.",
      "Phù hợp chương trình có mốc năm, phòng ban và thông điệp cá nhân.",
      "Dễ trưng bày tại bàn làm việc hoặc không gian vinh danh.",
    ],
    personalization: ["Tên và phòng ban", "Mốc năm", "Thông điệp tri ân", "Chất liệu gỗ, kim loại hoặc pha lê"],
    image: "assets/quaviet-recognition-award.png",
  },
  "Huy chương giải đấu": {
    category: "Medal",
    summary: "Giải pháp tối ưu cho sự kiện, thể thao, giáo dục và chương trình có số lượng người nhận lớn.",
    price: "75.000 - 260.000 VND",
    moq: "100+",
    timeline: "5 - 12 ngày tùy số lượng",
    fit: "Sports events, education awards, internal competitions",
    reasons: [
      "Chi phí tốt khi cần số lượng lớn.",
      "Dễ phân hạng vàng, bạc, đồng theo từng nội dung thi.",
      "Có thể đồng bộ dây đeo, logo và năm tổ chức.",
    ],
    personalization: ["Logo sự kiện", "Dây đeo theo màu thương hiệu", "Tên giải đấu", "Năm tổ chức"],
    image: "assets/product-medals.png",
  },
  "Custom Branded Trophy/Award": {
    category: "Custom Branded Trophy/Award",
    summary: "Giải pháp thiết kế riêng cho doanh nghiệp muốn kỷ vật vinh danh mang hình dáng, chất liệu và câu chuyện thương hiệu.",
    price: "Báo giá theo mẫu",
    moq: "30+",
    timeline: "21 - 45 ngày tùy thiết kế",
    fit: "Brand awards, anniversary awards, strategic partner recognition",
    reasons: [
      "Khác biệt so với catalogue thông thường, tạo dấu ấn thương hiệu riêng.",
      "Có thể phát triển theo logo, biểu tượng, ngành nghề hoặc câu chuyện chương trình.",
      "Phù hợp chương trình cấp cao, khách hàng VIP và giải thưởng thường niên.",
    ],
    personalization: ["Form dáng riêng", "Logo và màu thương hiệu", "Vật liệu theo ngân sách", "Hộp và chứng nhận đồng bộ"],
    image: "assets/quaviet-recognition-award.png",
  },
  "Corporate Giftset": {
    category: "Corporate Giftset",
    summary: "Bộ quà doanh nghiệp có bao bì thương hiệu cho đối tác, khách hàng VIP, nhân viên và sự kiện nội bộ.",
    price: "450.000 - 1.200.000 VND",
    moq: "50+",
    timeline: "10 - 21 ngày theo cấu hình hộp",
    fit: "Partner appreciation, client gifting, employee care",
    reasons: [
      "Có trải nghiệm mở hộp tốt hơn một sản phẩm đơn lẻ.",
      "Dễ thể hiện nhận diện thương hiệu qua sleeve, thiệp và hộp.",
      "Phù hợp đơn hàng số lượng lớn có nhiều nhóm người nhận.",
    ],
    personalization: ["Logo trên hộp", "Sleeve thương hiệu", "Thiệp cảm ơn", "Thông điệp theo nhóm khách hàng"],
    image: "assets/product-tet-giftset.png",
  },
  "Tết An Khang": createTetDetail("Tết An Khang", "650.000 - 950.000 VND", "100+", "Giftset đỏ hoa mai cân bằng giữa truyền thống, tính trang trọng và ngân sách doanh nghiệp.", "trà, hạt và bánh thủ công", "assets/tet-an-khang.jpg"),
  "Tết Phú Quý": createTetDetail("Tết Phú Quý", "1.200.000 - 1.800.000 VND", "50+", "Giftset xanh ngọc cao cấp cho khách hàng và đối tác quan trọng.", "trà, hạt, trái cây sấy và chocolate", "assets/tet-phu-quy.jpg"),
  "Tết Đại Cát": createTetDetail("Tết Đại Cát", "1.500.000 - 2.500.000 VND", "50+", "Bộ quà burgundy dành cho chương trình tri ân cấp quản lý và đối tác chiến lược.", "đồ uống lễ hội, cà phê, hạt và mứt", "assets/tet-dai-cat.jpg"),
  "Tết Như Ý": createTetDetail("Tết Như Ý", "550.000 - 850.000 VND", "100+", "Hộp hoa sen tươi sáng, phù hợp chương trình nhân viên và khách hàng đại trà.", "trà, hạt sen, bánh và trái cây sấy", "assets/tet-nhu-y.jpg"),
  "Tết Kim Phú": createTetDetail("Tết Kim Phú", "2.800.000 - 4.500.000 VND", "30+", "Giftset đen-vàng dành cho lãnh đạo, khách hàng VIP và đối tác chiến lược.", "cà phê, đồ uống, hạt, chocolate và vật phẩm bàn làm việc", "assets/tet-kim-phu.jpg"),
  "Tết Nghênh Xuân": createTetDetail("Tết Nghênh Xuân", "1.100.000 - 1.600.000 VND", "50+", "Bộ quà xanh hoàng gia kết hợp thực phẩm và tách trà để sử dụng lâu dài.", "trà, hạt, quả sấy, mật ong, bánh và tách", "assets/tet-nghenh-xuan.jpg"),
  "Tết Lộc Xanh": createTetDetail("Tết Lộc Xanh", "750.000 - 1.100.000 VND", "100+", "Bộ quà tre theo định hướng bền vững, phù hợp doanh nghiệp chú trọng môi trường.", "cà phê, trà, hạt, trái cây sấy và ly tái sử dụng", "assets/tet-loc-xanh.jpg"),
  "Tết Song Vượng": createTetDetail("Tết Song Vượng", "420.000 - 680.000 VND", "100+", "Giftset lục giác gọn đẹp cho đơn hàng số lượng lớn và ngân sách tối ưu.", "trà, hạt, mứt gừng và chocolate", "assets/tet-song-vuong.jpg"),
  "Tết Bình An": createTetDetail("Tết Bình An", "850.000 - 1.300.000 VND", "50+", "Bộ quà sức khỏe với bảng màu ivory và xanh sage thanh lịch.", "trà thảo mộc, mật ong, kỷ tử, hạt và bánh", "assets/tet-binh-an.jpg"),
  "Tết Vạn Phúc": createTetDetail("Tết Vạn Phúc", "1.300.000 - 2.000.000 VND", "50+", "Hộp tròn sơn đỏ tạo điểm nhấn lễ hội cho khách hàng và đối tác cao cấp.", "trà, hạt, mứt, chocolate và vật phẩm may mắn", "assets/tet-van-phuc.jpg"),
};

let activeDetailProduct = "Cúp sao pha lê Milano";

function syncPreview() {
  previewName.textContent = recipientName.value.trim() || "Tên người nhận";
  previewMessage.textContent = message.value.trim() || "Thông điệp vinh danh";
}

function parseCurrency(value) {
  return Number(String(value).replace(/[^\d]/g, "")) || 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN").format(Math.round(value)) + " VND";
}

function formatDate(value) {
  if (!value) return "Chưa chọn";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function syncProgramMetrics() {
  const budget = parseCurrency(budgetInput.value);
  const recipients = Number(recipientsInput.value) || 1;

  metricBudget.textContent = formatCurrency(budget);
  metricPerRecipient.textContent = formatCurrency(budget / recipients);
  metricDate.textContent = formatDate(deliveryInput.value);
}

function updateBuilderTotal() {
  const unit = Number(builderTier.value);
  const count = Number(builderRecipients.value) || 1;

  builderTotal.textContent = formatCurrency(unit * count);
  builderUnit.textContent = `${formatCurrency(unit)} / người`;
}

function activateWorkspacePanel(panelId) {
  workspaceTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.panel === panelId));
  workspacePanels.forEach((panel) => panel.classList.toggle("active", panel.id === panelId));
}

function applyProductFilters() {
  const query = catalogSearch.value.trim().toLocaleLowerCase("vi");
  let visibleCount = 0;

  productCards.forEach((card) => {
    const metadata = productDiscovery[card.dataset.product];
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesCollection = activeCollection === "all" || metadata.collections.includes(activeCollection);
    const matchesPrice = priceFilter.value === "all" || metadata.price === priceFilter.value;
    const matchesTimeline = timelineFilter.value === "all" || metadata.timeline === timelineFilter.value || (timelineFilter.value === "standard" && metadata.timeline === "fast");
    const matchesPersonalization = !personalizationFilter.checked || metadata.collections.includes("personalized");
    const matchesSearch = !query || card.textContent.toLocaleLowerCase("vi").includes(query);
    const visible = matchesCategory && matchesCollection && matchesPrice && matchesTimeline && matchesPersonalization && matchesSearch;

    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  resultsCount.textContent = visibleCount;
  emptyResults.hidden = visibleCount !== 0;
  resultsContext.textContent = activeCollection === "all"
    ? "Catalogue Quà Việt"
    : document.querySelector(`.collection-button[data-collection="${activeCollection}"] strong`).textContent;
}

function applyProductFilter(category) {
  activeCategory = category;
  filterButtons.forEach((item) => item.classList.toggle("active", item.dataset.filter === category));
  applyProductFilters();
}

function updateShortlist() {
  const names = [...shortlist];
  shortlistTray.hidden = names.length === 0;
  shortlistCount.textContent = names.length;
  shortlistSummary.textContent = names.length
    ? names.join(" · ")
    : "Chọn sản phẩm để so sánh và nhận báo giá chung.";

  document.querySelectorAll(".shortlist-product").forEach((button) => {
    const product = button.closest(".product-card").dataset.product;
    const selected = shortlist.has(product);
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
    button.textContent = selected ? "Đã lưu" : "Lưu danh sách";
  });
}

function updateRecommendation() {
  const base = recommendations[guideOccasion.value];
  const budgetLabel = guideBudget.selectedOptions[0].textContent;
  const volumeLabel = guideVolume.selectedOptions[0].textContent;

  recommendTitle.textContent = base.title;
  recommendReason.textContent = `${base.reason} Ngân sách: ${budgetLabel}. Số lượng: ${volumeLabel}.`;
  viewRecommendation.dataset.category = base.category;
}

function openQuoteDrawer(product = "chương trình vinh danh") {
  quoteDrawer.classList.add("open");
  quoteDrawer.setAttribute("aria-hidden", "false");
  quoteBudget.value = budgetInput.value;
  quoteNote.value = `Cần tư vấn và báo giá cho ${product}. Số lượng dự kiến: ${recipientsInput.value} người nhận.`;
}

function closeQuoteDrawer() {
  quoteDrawer.classList.remove("open");
  quoteDrawer.setAttribute("aria-hidden", "true");
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function openProductDetail(product) {
  const detail = productDetails[product];
  const specs = productSpecs[product];
  activeDetailProduct = product;

  detailCategory.textContent = detail.category;
  detailTitle.textContent = product;
  detailSummary.textContent = detail.summary;
  detailImage.src = detail.image || "assets/quaviet-recognition-award.png";
  detailPrice.textContent = detail.price;
  detailMoq.textContent = detail.moq;
  detailTimeline.textContent = detail.timeline;
  detailFit.textContent = detail.fit;
  detailCode.textContent = specs.code;
  detailMaterial.textContent = specs.material;
  detailSize.textContent = specs.size;
  detailFinish.textContent = specs.finish;
  renderList(detailReasons, detail.reasons);
  renderList(detailPersonalization, detail.personalization);
  productDetailDrawer.classList.add("open");
  productDetailDrawer.setAttribute("aria-hidden", "false");
}

function closeProductDetail() {
  productDetailDrawer.classList.remove("open");
  productDetailDrawer.setAttribute("aria-hidden", "true");
}

function setStatus(status) {
  const items = timeline.querySelectorAll("li");

  items.forEach((item) => item.classList.remove("approved", "active", "done"));

  if (status === "approved") {
    approvalChip.textContent = "Đã duyệt";
    approvalChip.style.background = "#eef8ef";
    approvalChip.style.color = "#1c7c31";
    items[0].classList.add("done");
    items[1].classList.add("done");
    items[2].classList.add("approved");
    items[3].classList.add("active");
    items[2].querySelector("span").textContent = "Vừa được phê duyệt";
    items[3].querySelector("span").textContent = "Sẵn sàng khóa để sản xuất";
    approveButton.textContent = "Thiết kế đã duyệt";
    metricStatus.textContent = "Đã duyệt mẫu";
  }

  if (status === "changes") {
    approvalChip.textContent = "Cần chỉnh sửa";
    approvalChip.style.background = "#fff0f1";
    approvalChip.style.color = "#c90916";
    items[0].classList.add("done");
    items[1].classList.add("active");
    items[1].querySelector("span").textContent = "Ghi chú chỉnh sửa đã gửi cho đội thiết kế";
    approveButton.textContent = "Duyệt thiết kế";
    metricStatus.textContent = "Cần chỉnh sửa";
  }
}

recipientName.addEventListener("input", syncPreview);
message.addEventListener("input", syncPreview);
budgetInput.addEventListener("input", syncProgramMetrics);
deliveryInput.addEventListener("input", syncProgramMetrics);
recipientsInput.addEventListener("input", syncProgramMetrics);
builderTier.addEventListener("change", updateBuilderTotal);
builderRecipients.addEventListener("input", updateBuilderTotal);

importButton.addEventListener("click", () => {
  importStatus.textContent = "Đã nhập 120 người nhận · 3 dòng thiếu phòng ban";
  importStatus.style.color = "#c90916";
});

approveButton.addEventListener("click", () => setStatus("approved"));
changesButton.addEventListener("click", () => setStatus("changes"));

programForm.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
});

logoButton.addEventListener("click", () => {
  logoIndex = (logoIndex + 1) % logoOptions.length;
  logoName.textContent = logoOptions[logoIndex];
});

productCards.forEach((card) => {
  const button = document.createElement("button");
  button.className = "button button-ghost shortlist-product";
  button.type = "button";
  button.setAttribute("aria-pressed", "false");
  button.textContent = "Lưu danh sách";
  card.querySelector(".product-actions").appendChild(button);

  button.addEventListener("click", () => {
    const product = card.dataset.product;
    if (shortlist.has(product)) shortlist.delete(product);
    else shortlist.add(product);
    updateShortlist();
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyProductFilter(button.dataset.filter);
  });
});

collectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCollection = button.dataset.collection;
    collectionButtons.forEach((item) => item.classList.toggle("active", item === button));
    applyProductFilters();
    document.querySelector(".results-heading").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

catalogSearch.addEventListener("input", applyProductFilters);
priceFilter.addEventListener("change", applyProductFilters);
timelineFilter.addEventListener("change", applyProductFilters);
personalizationFilter.addEventListener("change", applyProductFilters);

toggleAdvanced.addEventListener("click", () => {
  const expanded = advancedFilters.classList.toggle("mobile-open");
  toggleAdvanced.setAttribute("aria-expanded", String(expanded));
});

resetFilters.addEventListener("click", () => {
  activeCategory = "all";
  activeCollection = "all";
  catalogSearch.value = "";
  priceFilter.value = "all";
  timelineFilter.value = "all";
  personalizationFilter.checked = false;
  filterButtons.forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
  collectionButtons.forEach((item) => item.classList.toggle("active", item.dataset.collection === "all"));
  applyProductFilters();
});

compareShortlist.addEventListener("click", () => {
  const names = [...shortlist];
  if (names.length < 2) {
    shortlistSummary.textContent = "Hãy chọn ít nhất 2 sản phẩm để so sánh.";
    return;
  }

  activeCategory = "all";
  activeCollection = "all";
  productCards.forEach((card) => { card.hidden = !shortlist.has(card.dataset.product); });
  resultsCount.textContent = names.length;
  resultsContext.textContent = "So sánh danh sách quan tâm";
  emptyResults.hidden = true;
  document.querySelector(".results-heading").scrollIntoView({ behavior: "smooth", block: "start" });
});

quoteShortlist.addEventListener("click", () => {
  const names = [...shortlist];
  openQuoteDrawer(`danh sách ${names.join(", ")}`);
});

recommendButton.addEventListener("click", updateRecommendation);

viewRecommendation.addEventListener("click", () => {
  applyProductFilter(viewRecommendation.dataset.category || "awards");
  document.querySelector("#product-grid").scrollIntoView({ behavior: "smooth", block: "start" });
});

personalizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-card").dataset.product;

    message.value = productMessages[product] || "Thông điệp vinh danh";
    importStatus.textContent = `${product} đã được đưa vào module cá nhân hóa`;
    importStatus.style.color = "#1c7c31";
    syncPreview();
    document.querySelector("#personalize").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

detailButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openProductDetail(button.closest(".product-card").dataset.product);
  });
});

quoteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".product-card")?.dataset.product || "chương trình vinh danh";
    const volume = volumeSelect?.selectedOptions[0]?.textContent || "120 người nhận";

    importStatus.textContent = `Đã tạo brief báo giá cho ${product} · ${volume}`;
    importStatus.style.color = "#c90916";
    metricStatus.textContent = "Đang chờ báo giá";
    openQuoteDrawer(product);
  });
});

startButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

personalizeJumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#personalize").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

workspaceTabs.forEach((tab) => {
  tab.addEventListener("click", () => activateWorkspacePanel(tab.dataset.panel));
});

saveProgramButton.addEventListener("click", () => {
  metricStatus.textContent = "Đã lưu chương trình";
  importStatus.textContent = `${occasionSelect.value} đã được lưu vào workspace Quà Việt`;
  importStatus.style.color = "#1c7c31";
});

savedPrograms.forEach((program) => {
  program.addEventListener("click", () => {
    metricStatus.textContent = "Đã tải chương trình";
    importStatus.textContent = `${program.dataset.saved} đã được mở để đặt lại hoặc chỉnh sửa`;
    importStatus.style.color = "#1c7c31";
    activateWorkspacePanel("builder-panel");
  });
});

validateRecipients.addEventListener("click", () => {
  recipientValidationNote.textContent = "Đã kiểm tra: 3 người nhận đủ dữ liệu, 1 dòng cần bổ sung phòng ban trước khi khóa sản xuất.";
  recipientValidationNote.style.color = "#c90916";
});

menuButton.addEventListener("click", () => {
  siteHeader.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader.classList.remove("menu-open");
  });
});

drawerClose.addEventListener("click", closeQuoteDrawer);
quoteDrawer.addEventListener("click", (event) => {
  if (event.target === quoteDrawer) closeQuoteDrawer();
});

productDetailClose.addEventListener("click", closeProductDetail);
productDetailDrawer.addEventListener("click", (event) => {
  if (event.target === productDetailDrawer) closeProductDetail();
});

detailQuote.addEventListener("click", () => {
  closeProductDetail();
  openQuoteDrawer(activeDetailProduct);
});

detailAdvisor.addEventListener("click", () => {
  closeProductDetail();
  openQuoteDrawer(activeDetailProduct);
});

detailPersonalize.addEventListener("click", () => {
  const messageText = productMessages[activeDetailProduct] || "Thông điệp vinh danh";
  message.value = messageText;
  importStatus.textContent = `${activeDetailProduct} đã được chọn sau khi xem chi tiết`;
  importStatus.style.color = "#1c7c31";
  syncPreview();
  closeProductDetail();
  document.querySelector("#personalize").scrollIntoView({ behavior: "smooth", block: "start" });
});

quoteForm.addEventListener("submit", () => {
  sendQuote.textContent = "Đang gửi yêu cầu...";
  sendQuote.disabled = true;
});

if (new URLSearchParams(window.location.search).get("quote") === "success") {
  metricStatus.textContent = "Đã gửi yêu cầu báo giá";
  importStatus.textContent = "Cảm ơn bạn. Đội ngũ Quà Việt sẽ liên hệ trong vòng 24 giờ làm việc.";
  importStatus.style.color = "#1c7c31";
}

syncPreview();
syncProgramMetrics();
updateBuilderTotal();
updateRecommendation();
applyProductFilters();
updateShortlist();
