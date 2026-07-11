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
  "Golf Classic Championship": { price: "over1500", timeline: "standard", collections: ["bestseller", "premium", "personalized"] },
  "Golf Swing Elite": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Golf Crystal Drive": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Golf Heritage Shield": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Tennis Grand Slam Cup": { price: "500to1500", timeline: "standard", collections: ["bestseller", "premium", "personalized"] },
  "Tennis Rally Sculpture": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Pickleball Paddle Champion": { price: "500to1500", timeline: "fast", collections: ["fast", "personalized"] },
  "Pickleball Rally Ring": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Scholar Rising Star": { price: "500to1500", timeline: "fast", collections: ["fast", "personalized"] },
  "Torch of Knowledge": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Crystal Prism Milano": { price: "500to1500", timeline: "fast", collections: ["bestseller", "fast", "premium", "personalized"] },
  "Crystal Rising Star": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Acrylic Color Motion": { price: "under500", timeline: "fast", collections: ["fast", "personalized"] },
  "Acrylic Innovation Orbit": { price: "500to1500", timeline: "fast", collections: ["bestseller", "personalized"] },
  "Metal Ascend Sail": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Metal Infinity Orbit": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Wood Legacy Monolith": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Wood Metal Horizon": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Crystal Metal Apex": { price: "over1500", timeline: "custom", collections: ["premium", "personalized"] },
  "Eco Fusion Impact": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Bảng vinh danh thâm niên": { price: "under500", timeline: "fast", collections: ["bestseller", "fast", "personalized"] },
  "Marathon Finisher": { price: "under500", timeline: "fast", collections: ["bestseller", "fast", "personalized"] },
  "Championship Trio": { price: "under500", timeline: "fast", collections: ["bestseller", "fast", "personalized"] },
  "Corporate Excellence Medal": { price: "under500", timeline: "fast", collections: ["premium", "personalized"] },
  "Academic Achievement": { price: "under500", timeline: "fast", collections: ["fast", "personalized"] },
  "Esports Arena": { price: "under500", timeline: "standard", collections: ["personalized"] },
  "Cycling Challenge": { price: "under500", timeline: "standard", collections: ["personalized"] },
  "Aquatic Championship": { price: "under500", timeline: "fast", collections: ["fast", "personalized"] },
  "Kids Fun Run": { price: "under500", timeline: "fast", collections: ["fast", "personalized"] },
  "Heritage Commemorative": { price: "500to1500", timeline: "custom", collections: ["premium", "personalized"] },
  "Custom Brand Shape": { price: "under500", timeline: "custom", collections: ["premium", "personalized"] },
  "Custom Branded Trophy/Award": { price: "over1500", timeline: "custom", collections: ["premium", "personalized"] },
  "Corporate Welcome": { price: "500to1500", timeline: "standard", collections: ["bestseller", "fast", "personalized"] },
  "Executive Signature": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Workday Essentials": { price: "500to1500", timeline: "standard", collections: ["bestseller", "personalized"] },
  "Wellness Care": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Coffee Culture": { price: "500to1500", timeline: "standard", collections: ["bestseller", "personalized"] },
  "Eco Impact": { price: "500to1500", timeline: "standard", collections: ["personalized"] },
  "Travel Ready": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Desk Prestige": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Event Speaker": { price: "500to1500", timeline: "standard", collections: ["premium", "personalized"] },
  "Partner Appreciation": { price: "over1500", timeline: "standard", collections: ["premium", "personalized"] },
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
  "Golf Classic Championship": "Vinh danh nhà vô địch và dấu ấn tại mùa giải golf năm nay",
  "Golf Swing Elite": "Chúc mừng thành tích nổi bật và cú swing đầy bản lĩnh",
  "Golf Crystal Drive": "Tôn vinh cú đánh xuất sắc và tinh thần thi đấu ấn tượng",
  "Golf Heritage Shield": "Ghi danh thành tích và truyền thống đáng tự hào của câu lạc bộ",
  "Tennis Grand Slam Cup": "Chúc mừng nhà vô địch với bản lĩnh và phong độ xuất sắc",
  "Tennis Rally Sculpture": "Tôn vinh tinh thần thi đấu bền bỉ và những pha bóng ấn tượng",
  "Pickleball Paddle Champion": "Chúc mừng nhà vô địch pickleball của mùa giải",
  "Pickleball Rally Ring": "Tôn vinh tinh thần đồng đội và màn trình diễn xuất sắc",
  "Scholar Rising Star": "Chúc mừng thành tích học tập xuất sắc và hành trình vươn cao",
  "Torch of Knowledge": "Tôn vinh người truyền cảm hứng và đóng góp cho giáo dục",
  "Crystal Prism Milano": "Vinh danh thành tích xuất sắc và tinh thần dẫn dắt đội nhóm",
  "Crystal Rising Star": "Tôn vinh tài năng nổi bật và hành trình vươn tới những đỉnh cao mới",
  "Acrylic Color Motion": "Chúc mừng dấu ấn sáng tạo và tinh thần khác biệt",
  "Acrylic Innovation Orbit": "Ghi nhận ý tưởng đột phá và đóng góp cho đổi mới",
  "Metal Ascend Sail": "Tôn vinh bản lĩnh dẫn dắt và thành tích bứt phá",
  "Metal Infinity Orbit": "Trân trọng ghi nhận mối quan hệ hợp tác bền vững",
  "Wood Legacy Monolith": "Trân trọng ghi nhận hành trình cống hiến và di sản để lại",
  "Wood Metal Horizon": "Chúc mừng cột mốc tăng trưởng và hành trình vươn xa",
  "Crystal Metal Apex": "Tôn vinh thành tựu đỉnh cao và vai trò lãnh đạo xuất sắc",
  "Eco Fusion Impact": "Ghi nhận sáng kiến tạo tác động tích cực và bền vững",
  "Bảng vinh danh thâm niên": "Ghi nhận hành trình cống hiến và gắn bó cùng tổ chức",
  "Marathon Finisher": "Chúc mừng bạn đã chinh phục cự ly và hoàn thành hành trình đầy tự hào",
  "Championship Trio": "Chúc mừng thành tích xuất sắc tại mùa giải năm nay",
  "Corporate Excellence Medal": "Trân trọng ghi nhận thành tích nổi bật và tinh thần cống hiến",
  "Academic Achievement": "Chúc mừng thành tích học tập và nỗ lực bền bỉ",
  "Esports Arena": "Chúc mừng bản lĩnh thi đấu và chiến thắng ấn tượng",
  "Cycling Challenge": "Chúc mừng bạn đã chinh phục cung đường thử thách",
  "Aquatic Championship": "Chúc mừng thành tích nổi bật trên đường đua xanh",
  "Kids Fun Run": "Chúc mừng nhà vô địch nhỏ tuổi đã hoàn thành thử thách",
  "Heritage Commemorative": "Kỷ niệm dấu mốc tự hào và hành trình phát triển bền vững",
  "Custom Brand Shape": "Tôn vinh thành tích bằng dấu ấn riêng của chương trình",
  "Custom Branded Trophy/Award": "Tôn vinh thành tựu theo dấu ấn thương hiệu riêng",
  "Corporate Welcome": "Chào mừng bạn gia nhập và cùng tạo nên những thành tựu mới",
  "Executive Signature": "Trân trọng ghi nhận vai trò dẫn dắt và những đóng góp nổi bật",
  "Workday Essentials": "Cảm ơn bạn đã cùng chúng tôi kiến tạo một ngày làm việc hiệu quả",
  "Wellness Care": "Chúc bạn luôn khỏe mạnh, cân bằng và tràn đầy năng lượng",
  "Coffee Culture": "Mời bạn thưởng thức một khoảng dừng đầy cảm hứng",
  "Eco Impact": "Cùng lan tỏa lựa chọn xanh và những giá trị bền vững",
  "Travel Ready": "Chúc bạn một hành trình thuận lợi và nhiều trải nghiệm đáng nhớ",
  "Desk Prestige": "Trân trọng ghi nhận dấu ấn chuyên nghiệp và sự đồng hành bền vững",
  "Event Speaker": "Trân trọng cảm ơn những chia sẻ giá trị tại chương trình",
  "Partner Appreciation": "Trân trọng cảm ơn sự đồng hành và hợp tác bền vững",
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
  "Golf Classic Championship": { code: "QV-TRP-GCC", material: "Kim loại mạ, gỗ walnut", size: "3 cỡ cho champion và hạng mục", finish: "Mạ bạc, lòng vàng và bảng tên" },
  "Golf Swing Elite": { code: "QV-TRP-GSE", material: "Đồng, gunmetal và granite", size: "3 cỡ theo hạng mục", finish: "Xước hairline, mạ màu và bảng tên" },
  "Golf Crystal Drive": { code: "QV-TRP-GCD", material: "Pha lê quang học, đế pha lê emerald", size: "3 cỡ theo hạng mục", finish: "Vát cạnh, khắc laser" },
  "Golf Heritage Shield": { code: "QV-TRP-GHS", material: "Gỗ walnut, đồng và men màu", size: "3 cỡ theo cấp giải", finish: "Sơn mờ, phù điêu và bảng đồng" },
  "Tennis Grand Slam Cup": { code: "QV-TRP-TGC", material: "Kim loại mạ, đế đá", size: "Bộ vàng, bạc, đồng", finish: "Mạ ba màu, phù điêu bóng" },
  "Tennis Rally Sculpture": { code: "QV-TRP-TRS", material: "Thép xước, hợp kim và granite", size: "3 cỡ theo hạng mục", finish: "Xước bạc, mạ vàng và bảng tên" },
  "Pickleball Paddle Champion": { code: "QV-TRP-PPC", material: "Hợp kim, men màu và đế đá", size: "3 cỡ theo cấp giải", finish: "Xước bạc, viền vàng và men teal" },
  "Pickleball Rally Ring": { code: "QV-TRP-PRR", material: "Hợp kim mạ, đế acrylic", size: "3 cỡ theo hạng mục", finish: "Mạ vàng/bạc và bảng tên" },
  "Scholar Rising Star": { code: "QV-TRP-SRS", material: "Pha lê, đồng và đế navy", size: "3 cỡ theo cấp giải", finish: "Khắc laser, xước vàng" },
  "Torch of Knowledge": { code: "QV-TRP-TOK", material: "Gỗ walnut, đồng và pha lê", size: "3 cỡ theo hạng mục", finish: "Sơn mờ, xước vàng và khắc" },
  "Crystal Prism Milano": { code: "QV-AWD-CPR", material: "Pha lê quang học", size: "3 cỡ theo hạng mục", finish: "Vát cạnh, khắc laser và hộp" },
  "Crystal Rising Star": { code: "QV-AWD-CST", material: "Pha lê trong, đế pha lê navy", size: "3 cỡ theo cấp giải", finish: "Khắc laser và bảng tên kim loại" },
  "Acrylic Color Motion": { code: "QV-AWD-ACM", material: "Acrylic trong và acrylic màu", size: "3 cỡ theo hạng mục", finish: "Cắt laser, in UV và ghép lớp" },
  "Acrylic Innovation Orbit": { code: "QV-AWD-AIO", material: "Acrylic khói, acrylic trong", size: "3 cỡ theo cấp giải", finish: "Ghép lớp, in UV và viền màu" },
  "Metal Ascend Sail": { code: "QV-AWD-MAS", material: "Thép không gỉ, hợp kim và đá", size: "3 cỡ theo hạng mục", finish: "Xước hairline, mạ champagne" },
  "Metal Infinity Orbit": { code: "QV-AWD-MIO", material: "Đồng, gunmetal và granite", size: "3 cỡ theo cấp giải", finish: "Uốn kim loại, xước và mạ màu" },
  "Wood Legacy Monolith": { code: "QV-AWD-WLM", material: "Gỗ walnut, đồng", size: "3 cỡ theo thâm niên", finish: "Sơn mờ, nẹp và bảng đồng" },
  "Wood Metal Horizon": { code: "QV-AWD-WMH", material: "Gỗ oak, thép và đá", size: "3 cỡ theo hạng mục", finish: "Xước kim loại, dầu gỗ và bảng tên" },
  "Crystal Metal Apex": { code: "QV-AWD-CMA", material: "Pha lê quang học, kim loại và đế đen", size: "3 cỡ VIP", finish: "Vát cạnh, mạ vàng và khắc 3D" },
  "Eco Fusion Impact": { code: "QV-AWD-EFI", material: "Acrylic tái chế, tre và acrylic trong", size: "3 cỡ theo hạng mục", finish: "In UV, khắc laser trên tre" },
  "Bảng vinh danh thâm niên": { code: "QV-PLAQUE", material: "Gỗ, kim loại, mica hoặc pha lê", size: "Để bàn hoặc treo tường", finish: "Khắc laser, in UV, ép nhiệt" },
  "Marathon Finisher": { code: "QV-MED-RUN", material: "Hợp kim đúc, dây dệt", size: "65 - 90 mm", finish: "Mạ đồng cổ, phù điêu và in dây" },
  "Championship Trio": { code: "QV-MED-TRIO", material: "Hợp kim, dây dệt", size: "55 - 75 mm", finish: "Mạ vàng, bạc, đồng và khắc hạng" },
  "Corporate Excellence Medal": { code: "QV-MED-COR", material: "Đồng xước, dây satin và hộp cứng", size: "60 - 75 mm", finish: "Khắc laser, mạ vàng và hộp navy" },
  "Academic Achievement": { code: "QV-MED-EDU", material: "Hợp kim, dây dệt", size: "55 - 70 mm", finish: "Phù điêu sách, mạ ba màu" },
  "Esports Arena": { code: "QV-MED-ESP", material: "Hợp kim, men màu và dây dệt", size: "65 - 85 mm", finish: "Gunmetal, men cyan-magenta" },
  "Cycling Challenge": { code: "QV-MED-CYC", material: "Hợp kim đúc, dây dệt", size: "70 - 90 mm", finish: "Gunmetal, phù điêu cung đường" },
  "Aquatic Championship": { code: "QV-MED-SWM", material: "Hợp kim, dây dệt", size: "55 - 75 mm", finish: "Mạ ba màu, phù điêu sóng nước" },
  "Kids Fun Run": { code: "QV-MED-KID", material: "Hợp kim nhẹ, men màu và dây", size: "55 - 70 mm", finish: "Men mềm nhiều màu, viền vàng" },
  "Heritage Commemorative": { code: "QV-MED-HER", material: "Đồng đúc, nhung và hộp gỗ", size: "80 - 110 mm", finish: "Đồng cổ, phù điêu sâu và hộp gỗ" },
  "Custom Brand Shape": { code: "QV-MED-CUS", material: "Hợp kim, men màu và dây dệt", size: "Theo thiết kế được duyệt", finish: "Cắt khuôn riêng, men màu và dây riêng" },
  "Custom Branded Trophy/Award": { code: "QV-CUSTOM", material: "Kính, kim loại, acrylic, gỗ", size: "Phát triển theo concept được duyệt", finish: "Phối vật liệu, khắc và in theo nhận diện" },
  "Corporate Welcome": { code: "QV-COR-WEL", material: "Hộp cứng, sổ vải, kim loại và inox", size: "Hộp 5 sản phẩm", finish: "In logo, khắc tên và thiệp chào mừng" },
  "Executive Signature": { code: "QV-COR-EXE", material: "Da, kim loại, gỗ và cà phê", size: "Hộp 5 sản phẩm", finish: "Đen nhám, ép kim và khắc tên" },
  "Workday Essentials": { code: "QV-COR-TEC", material: "Thiết bị điện tử, inox và sổ vải", size: "Hộp 5 sản phẩm", finish: "In UV, sleeve và màu thương hiệu" },
  "Wellness Care": { code: "QV-COR-WELNESS", material: "Trà, mật ong, gốm, vải và thủy tinh", size: "Hộp 5 sản phẩm", finish: "Xanh sage, logo hộp và thiệp" },
  "Coffee Culture": { code: "QV-COR-COF", material: "Cà phê, gốm, bánh, chocolate và giấy", size: "Hộp 6 sản phẩm", finish: "Burgundy, in logo và sleeve" },
  "Eco Impact": { code: "QV-COR-ECO", material: "Tre, giấy tái chế, vải cotton và giấy hạt giống", size: "Hộp 5 sản phẩm", finish: "Khắc laser và sleeve kraft" },
  "Travel Ready": { code: "QV-COR-TRV", material: "Vải, da, inox và phụ kiện du lịch", size: "Hộp 6 sản phẩm", finish: "Dập logo, khắc tên và thiệp" },
  "Desk Prestige": { code: "QV-COR-DSK", material: "Gỗ, da, kim loại và pha lê", size: "Hộp 5 sản phẩm", finish: "Khắc laser, bảng tên và hộp VIP" },
  "Event Speaker": { code: "QV-COR-SPK", material: "Pha lê, kim loại, giấy và inox", size: "Hộp 5 sản phẩm", finish: "Khắc tên, logo sự kiện và thiệp" },
  "Partner Appreciation": { code: "QV-COR-PTN", material: "Trà, cà phê, hạt, chocolate và da", size: "Hộp 6 sản phẩm", finish: "Xanh emerald, ép kim và thiệp tên" },
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
    title: "Bộ sưu tập 10 Award theo chất liệu và cấp độ",
    reason: "Phù hợp chương trình vinh danh nhân viên: dễ chọn pha lê, acrylic, kim loại, gỗ hoặc phối vật liệu theo ngân sách và tính chất giải thưởng.",
  },
  partner: {
    category: "giftsets",
    title: "Bộ sưu tập 10 Corporate Giftset theo mục đích",
    reason: "Phù hợp tri ân khách hàng/đối tác, onboarding và chăm sóc nhân viên: dễ chọn theo người nhận, ngân sách và câu chuyện thương hiệu.",
  },
  event: {
    category: "medals",
    title: "Bộ sưu tập 10 huy chương theo loại sự kiện",
    reason: "Phù hợp giải thể thao, trường học và vinh danh doanh nghiệp: dễ chọn theo môn thi, ngân sách, số lượng và mức độ cá nhân hóa.",
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

function createCorporateDetail(price, moq, summary, contents, image, fit) {
  return {
    category: "Corporate Giftset",
    summary,
    price,
    moq,
    timeline: "10 - 25 ngày sau duyệt mẫu và nội dung",
    fit,
    reasons: [
      `Cấu hình ${contents} tạo trải nghiệm mở hộp chỉn chu và hữu dụng.`,
      "Bao bì có thể đồng bộ logo, màu thương hiệu và thông điệp chương trình.",
      "Hỗ trợ cá nhân hóa theo người nhận và quản lý giao hàng theo danh sách.",
    ],
    personalization: ["Logo trên hộp hoặc sleeve", "Tên người nhận", "Thiệp theo chương trình", "Túi quà đồng bộ"],
    image,
  };
}

function createMedalDetail(price, moq, summary, style, image, fit, timeline = "10 - 20 ngày sau duyệt mẫu") {
  return {
    category: "Huy chương",
    summary,
    price,
    moq,
    timeline,
    fit,
    reasons: [
      `${style} giúp người nhận nhận biết rõ tinh thần và cấp độ của giải thưởng.`,
      "Có thể đồng bộ mặt huy chương, dây đeo và màu nhận diện của chương trình.",
      "Hỗ trợ tách hạng mục, kiểm tra nội dung và đóng gói theo danh sách trao giải.",
    ],
    personalization: ["Logo và tên sự kiện", "Hạng mục hoặc cự ly", "Dây đeo theo thương hiệu", "Hộp hoặc túi đựng"],
    image,
  };
}

function createAwardDetail(price, moq, summary, materialStory, image, fit, timeline = "10 - 21 ngày sau duyệt mẫu") {
  return {
    category: "Award",
    summary,
    price,
    moq,
    timeline,
    fit,
    reasons: [
      `${materialStory} tạo dấu ấn riêng khi trưng bày và trao thưởng trên sân khấu.`,
      "Có thể chuẩn hóa nhiều kích thước nhưng vẫn cá nhân hóa tên và danh hiệu từng người.",
      "Hỗ trợ duyệt nội dung, kiểm tra chính tả và đóng hộp theo danh sách trao giải.",
    ],
    personalization: ["Logo doanh nghiệp", "Tên người nhận", "Danh hiệu và năm trao giải", "Hộp trao tặng cao cấp"],
    image,
  };
}

function createTrophyDetail(category, price, moq, summary, designStory, image, fit, timeline = "10 - 21 ngày sau duyệt mẫu") {
  return {
    category,
    summary,
    price,
    moq,
    timeline,
    fit,
    reasons: [
      `${designStory} giúp hạng mục được nhận diện rõ trên sân khấu và trong ảnh trao giải.`,
      "Có thể triển khai nhiều kích thước cho champion, á quân và các giải chuyên môn.",
      "Hỗ trợ kiểm tra tên, hạng mục và đóng hộp riêng theo danh sách trao thưởng.",
    ],
    personalization: ["Logo và tên giải", "Tên người nhận", "Hạng mục và năm tổ chức", "Hộp trao tặng"],
    image,
  };
}

const productDetails = {
  "Golf Classic Championship": createTrophyDetail("Golf Trophy", "2.800.000 - 6.500.000 VND", "3+", "Cúp golf phong cách championship dành cho giải vô địch, nhà tài trợ và sự kiện câu lạc bộ cao cấp.", "Cúp bạc tay cầm, lòng vàng và đế walnut", "assets/trophy-golf-classic.jpg", "Golf champion, club championship và sponsor tournaments", "14 - 30 ngày sau duyệt mẫu"),
  "Golf Swing Elite": createTrophyDetail("Golf Trophy", "1.500.000 - 3.200.000 VND", "10+", "Tượng golf kim loại tạo hình cú swing cho các giải chuyên môn và thành tích cá nhân.", "Đường cong golfer bằng đồng trên đế granite", "assets/trophy-golf-swing.jpg", "Best gross, best net, longest drive và nearest pin"),
  "Golf Crystal Drive": createTrophyDetail("Golf Trophy", "1.200.000 - 2.800.000 VND", "10+", "Bóng golf pha lê bắt sáng tốt, phù hợp giải golf doanh nghiệp và hạng mục kỹ thuật.", "Bóng golf pha lê trên tee và đế emerald", "assets/trophy-golf-crystal.jpg", "Longest drive, hole-in-one và corporate golf"),
  "Golf Heritage Shield": createTrophyDetail("Golf Trophy", "950.000 - 1.800.000 VND", "20+", "Cúp gỗ mang cảm giác truyền thống cho câu lạc bộ, giải thường niên và nhiều cấp hạng.", "Gỗ walnut phối phù điêu green golf bằng đồng", "assets/trophy-golf-heritage.jpg", "Club awards, annual tournaments và member recognition"),
  "Tennis Grand Slam Cup": createTrophyDetail("Tennis Trophy", "1.200.000 - 3.500.000 VND", "10+", "Bộ cúp tennis vàng, bạc, đồng cho vô địch, á quân và các nội dung thi đấu.", "Cúp kim loại có phù điêu đường seam bóng tennis", "assets/trophy-tennis-cup.jpg", "Singles, doubles, club tournaments và corporate tennis"),
  "Tennis Rally Sculpture": createTrophyDetail("Tennis Trophy", "1.400.000 - 2.900.000 VND", "10+", "Tượng vợt tennis hiện đại cho giải cấp cao và các hạng mục chuyên môn.", "Cụm vợt thép xước, bóng vàng và đường chuyển động", "assets/trophy-tennis-racket.jpg", "Championship, MVP, best player và tennis leagues"),
  "Pickleball Paddle Champion": createTrophyDetail("Pickleball Trophy", "850.000 - 1.900.000 VND", "20+", "Cúp pickleball dễ nhận biết cho nội dung đơn, đôi, câu lạc bộ và phong trào doanh nghiệp.", "Hai paddle bắt chéo và bóng perforated", "assets/trophy-pickleball-paddle.jpg", "Singles, doubles, club events và company tournaments"),
  "Pickleball Rally Ring": createTrophyDetail("Pickleball Trophy", "1.100.000 - 2.400.000 VND", "20+", "Thiết kế vòng tròn gọn hiện đại cho các giải pickleball cần nhận diện sân khấu mạnh.", "Vòng kim loại ôm paddle và bóng trên đế xanh", "assets/trophy-pickleball-rally.jpg", "Pickleball championship, team events và sponsor awards"),
  "Scholar Rising Star": createTrophyDetail("Education Trophy", "950.000 - 1.800.000 VND", "20+", "Cúp học thuật pha lê cho học sinh, sinh viên xuất sắc và cuộc thi kiến thức.", "Sách pha lê nâng ngôi sao vàng", "assets/trophy-education-scholar.jpg", "Academic excellence, olympiad và student awards"),
  "Torch of Knowledge": createTrophyDetail("Education Trophy", "1.300.000 - 2.600.000 VND", "10+", "Cúp giáo dục cao cấp dành cho nhà giáo, lãnh đạo và sáng kiến tạo tác động trong học tập.", "Ngọn đuốc vàng trên thân gỗ với chi tiết pha lê", "assets/trophy-education-torch.jpg", "Teacher awards, education leadership và innovation"),
  "Crystal Prism Milano": createAwardDetail("890.000 - 1.650.000 VND", "10+", "Award pha lê quang học thanh lịch cho các chương trình vinh danh cần hình ảnh trang trọng và vượt thời gian.", "Pha lê vát cạnh bắt sáng tốt", "assets/award-crystal-prism.jpg", "Employee awards, dealer awards và partner recognition", "7 - 14 ngày sau duyệt mẫu"),
  "Crystal Rising Star": createAwardDetail("1.200.000 - 2.400.000 VND", "10+", "Biểu tượng ngôi sao vươn cao phù hợp ghi nhận tài năng, lãnh đạo và thành tích nổi bật.", "Pha lê trong kết hợp đế navy", "assets/award-crystal-star.jpg", "Rising talent, leadership awards và top performers"),
  "Acrylic Color Motion": createAwardDetail("420.000 - 850.000 VND", "20+", "Award acrylic nhiều màu cho chương trình trẻ trung, thương hiệu sáng tạo và ngân sách linh hoạt.", "Acrylic trong phối lớp màu thương hiệu", "assets/award-acrylic-color.jpg", "Creative awards, brand events và youth programs", "7 - 14 ngày sau duyệt thiết kế"),
  "Acrylic Innovation Orbit": createAwardDetail("650.000 - 1.200.000 VND", "20+", "Thiết kế vòng tròn nhiều lớp diễn tả chuyển động, kết nối và đổi mới liên tục.", "Acrylic khói, acrylic trong và viền cyan", "assets/award-acrylic-orbit.jpg", "Innovation awards, technology teams và transformation programs"),
  "Metal Ascend Sail": createAwardDetail("1.500.000 - 2.800.000 VND", "10+", "Tạo hình cánh buồm kim loại thể hiện bản lĩnh, tăng trưởng và tinh thần dẫn dắt.", "Thép xước phối kim loại mạ champagne", "assets/award-metal-sail.jpg", "Sales leadership, executive awards và dealer champions"),
  "Metal Infinity Orbit": createAwardDetail("1.800.000 - 3.500.000 VND", "10+", "Tác phẩm kim loại giao thoa phù hợp tôn vinh quan hệ hợp tác và thành tựu dài hạn.", "Vòng đồng và gunmetal trên đế granite", "assets/award-metal-orbit.jpg", "Strategic partners, anniversaries và executive recognition", "14 - 28 ngày sau duyệt mẫu"),
  "Wood Legacy Monolith": createAwardDetail("850.000 - 1.600.000 VND", "20+", "Award gỗ ấm áp, bền vững cho thâm niên, cống hiến và dấu ấn lãnh đạo.", "Gỗ walnut nguyên khối điểm nẹp đồng", "assets/award-wood-legacy.jpg", "Service awards, retirement và legacy recognition"),
  "Wood Metal Horizon": createAwardDetail("1.100.000 - 2.100.000 VND", "20+", "Phối gỗ và kim loại cân bằng cảm giác truyền thống với tinh thần tiến về phía trước.", "Gỗ oak, thép xước và điểm nhấn vàng", "assets/award-wood-metal.jpg", "Milestone awards, growth awards và project recognition"),
  "Crystal Metal Apex": createAwardDetail("2.200.000 - 4.200.000 VND", "10+", "Award phối pha lê và kim loại cao cấp dành cho thành tựu đỉnh cao và người nhận VIP.", "Pha lê faceted được nâng bởi hai cánh kim loại vàng", "assets/award-crystal-metal.jpg", "C-suite awards, lifetime achievement và strategic partners", "18 - 35 ngày sau duyệt mẫu"),
  "Eco Fusion Impact": createAwardDetail("650.000 - 1.300.000 VND", "30+", "Award định hướng bền vững cho sáng kiến xanh, ESG và các chương trình tạo tác động tích cực.", "Acrylic xanh tái chế kết hợp đế tre", "assets/award-eco-fusion.jpg", "ESG awards, sustainability initiatives và social impact"),
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
  "Marathon Finisher": createMedalDetail("95.000 - 260.000 VND", "200+", "Huy chương hoàn thành cự ly tạo kỷ vật đáng nhớ cho runner và giải chạy quy mô lớn.", "Phù điêu vận động viên và tuyến đường", "assets/medal-marathon.jpg", "Marathon, trail, charity run và giải chạy doanh nghiệp"),
  "Championship Trio": createMedalDetail("85.000 - 220.000 VND", "100+", "Bộ huy chương vàng, bạc, đồng dễ triển khai cho nhiều môn thi và cấp giải.", "Bộ ba màu kim loại và vòng nguyệt quế", "assets/medal-championship.jpg", "Football, multi-sport, company games và tournaments"),
  "Corporate Excellence Medal": createMedalDetail("180.000 - 420.000 VND", "50+", "Huy chương doanh nghiệp trang trọng cho thành tích cá nhân, đội nhóm và chương trình nội bộ.", "Bề mặt đồng xước, biểu tượng ngôi sao và hộp trao tặng", "assets/medal-corporate.jpg", "Employee recognition, sales awards và leadership programs"),
  "Academic Achievement": createMedalDetail("75.000 - 190.000 VND", "100+", "Bộ huy chương học thuật cho lễ tổng kết, olympic kiến thức và cuộc thi sinh viên.", "Biểu tượng sách và vòng nguyệt quế", "assets/medal-academic.jpg", "Schools, universities, academic contests và graduation"),
  "Esports Arena": createMedalDetail("120.000 - 320.000 VND", "100+", "Huy chương hình khối hiện đại tạo hình ảnh mạnh cho giải đấu esports và cộng đồng gaming.", "Gunmetal góc cạnh với men màu cyan-magenta", "assets/medal-esports.jpg", "Esports tournaments, gaming leagues và youth events"),
  "Cycling Challenge": createMedalDetail("110.000 - 280.000 VND", "150+", "Huy chương cỡ lớn dành cho giải đạp xe đường trường, địa hình và thử thách theo chặng.", "Bánh xe, núi và cung đường nổi khối", "assets/medal-cycling.jpg", "Cycling races, mountain challenges và endurance events"),
  "Aquatic Championship": createMedalDetail("85.000 - 230.000 VND", "100+", "Bộ huy chương bơi lội rõ cấp hạng, phù hợp giải phong trào đến thi đấu chuyên nghiệp.", "Sóng nước và vận động viên bơi nổi khối", "assets/medal-aquatic.jpg", "Swimming meets, school competitions và aquatic clubs"),
  "Kids Fun Run": createMedalDetail("65.000 - 160.000 VND", "200+", "Huy chương nhẹ, nhiều màu và thân thiện cho trẻ em trong ngày hội vận động.", "Ngôi sao, giày chạy và men màu vui tươi", "assets/medal-kids.jpg", "Kids run, family day, school sports và community events"),
  "Heritage Commemorative": createMedalDetail("450.000 - 1.200.000 VND", "30+", "Huy chương kỷ niệm cao cấp lưu giữ dấu mốc lịch sử, kiến trúc hoặc hành trình thương hiệu.", "Đồng cổ cỡ lớn, phù điêu sâu và hộp gỗ", "assets/medal-heritage.jpg", "Anniversaries, state events, heritage programs và VIP recognition", "21 - 40 ngày sau duyệt mẫu"),
  "Custom Brand Shape": createMedalDetail("150.000 - 450.000 VND", "100+", "Huy chương phát triển khuôn riêng theo logo, linh vật hoặc biểu tượng độc quyền của sự kiện.", "Hình cắt riêng, men màu và dây dệt theo nhận diện", "assets/medal-custom.jpg", "Branded races, signature events và custom campaigns", "18 - 35 ngày sau duyệt thiết kế"),
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
  "Corporate Welcome": createCorporateDetail("550.000 - 850.000 VND", "50+", "Bộ quà onboarding giúp nhân viên mới cảm nhận sự chào đón ngay từ ngày đầu tiên.", "sổ tay, bút, bình giữ nhiệt, thẻ tên và thiệp", "assets/corporate-welcome.jpg", "Onboarding, welcome kit và employer branding"),
  "Executive Signature": createCorporateDetail("1.800.000 - 3.200.000 VND", "30+", "Bộ quà cao cấp dành cho lãnh đạo, khách hàng VIP và đối tác chiến lược.", "sổ da, bút, đồng hồ bàn, cà phê và thiệp", "assets/corporate-executive.jpg", "Executive gifting, strategic partners và leadership recognition"),
  "Workday Essentials": createCorporateDetail("900.000 - 1.500.000 VND", "50+", "Bộ phụ kiện công nghệ thiết thực cho đội ngũ hiện đại và chương trình làm việc linh hoạt.", "sạc không dây, pin dự phòng, phụ kiện cáp, bình và sổ", "assets/corporate-workday.jpg", "Employee gifts, tech teams và hybrid work"),
  "Wellness Care": createCorporateDetail("750.000 - 1.200.000 VND", "50+", "Bộ quà chăm sóc sức khỏe tinh tế cho nhân viên, khách hàng và chương trình wellbeing.", "trà, mật ong, máy khuếch tán, bịt mắt và bình", "assets/corporate-wellness.jpg", "Employee wellbeing, health campaigns và client care"),
  "Coffee Culture": createCorporateDetail("850.000 - 1.400.000 VND", "50+", "Trải nghiệm cà phê tại bàn làm việc dành cho khách hàng và đội ngũ yêu sáng tạo.", "cà phê, phễu pha, tách, chocolate, bánh và sổ", "assets/corporate-coffee.jpg", "Creative teams, client gifting và office culture"),
  "Eco Impact": createCorporateDetail("600.000 - 1.000.000 VND", "100+", "Bộ quà vật liệu tự nhiên thể hiện cam kết phát triển bền vững của doanh nghiệp.", "bình tre, sổ tái chế, thiệp hạt giống, bộ tre và túi vải", "assets/corporate-eco.jpg", "ESG campaigns, sustainability events và employee gifts"),
  "Travel Ready": createCorporateDetail("1.100.000 - 1.800.000 VND", "50+", "Bộ phụ kiện giúp chuyến công tác thoải mái, gọn gàng và chuyên nghiệp hơn.", "túi phụ kiện, thẻ hành lý, gối cổ, bịt mắt, bình và ví", "assets/corporate-travel.jpg", "Business travel, incentive trips và sales teams"),
  "Desk Prestige": createCorporateDetail("1.300.000 - 2.200.000 VND", "30+", "Bộ vật phẩm bàn làm việc sang trọng để tri ân lãnh đạo và đối tác quan trọng.", "khay gỗ, bộ bút, hộp danh thiếp, sổ và kỷ vật pha lê", "assets/corporate-desk.jpg", "Leadership gifts, promotions và partner recognition"),
  "Event Speaker": createCorporateDetail("950.000 - 1.600.000 VND", "50+", "Bộ quà kết hợp kỷ niệm chương và vật phẩm hữu dụng dành cho diễn giả, khách mời.", "kỷ niệm chương, sổ, bút, bình và thiệp", "assets/corporate-speaker.jpg", "Conferences, speaker appreciation và event recognition"),
  "Partner Appreciation": createCorporateDetail("1.500.000 - 2.500.000 VND", "30+", "Bộ quà tri ân cao cấp cân bằng thực phẩm chọn lọc và vật phẩm da sử dụng lâu dài.", "trà, cà phê, hạt, chocolate, ví da và thiệp", "assets/corporate-partner.jpg", "Key accounts, strategic partners và client appreciation"),
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
