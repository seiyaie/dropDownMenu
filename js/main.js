/**
 * ビューポートの設定を切り替え
 * 画面の幅が380px未満の場合：ビューポートを380pxに固定
 * それ以上の場合：デバイスの幅に基づいてビューポートを設定
 */
const switchViewport = () => {
    // ビューポート要素を取得
    const viewportMeta = document.querySelector('meta[name="viewport"]');

    // 条件に基づいて適用するビューポートの設定を決定
    const viewportContent = window.outerWidth > 380 ? "width=device-width, initial-scale=1" : "width=380";

    // ビューポート要素が存在しない場合はreturn
    if (!viewportMeta) return;

    // 現在のビューポートの設定が目的の設定と異なる場合にのみ、新しい設定を適用します。
    if (viewportMeta.getAttribute("content") !== viewportContent) {
        viewportMeta.setAttribute("content", viewportContent);
    }
};
switchViewport();

// dropdown menu //

const initializeDropdown = () => {
    const dropdownIcon = document.querySelector(".js-dropdown-icon");
    const menu = document.querySelector(".js-menu");

    if (!dropdownIcon || !menu) return;

    dropdownIcon.addEventListener("click", (e) => {
        menu.classList.toggle("active");
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            menu.classList.remove("active");
        }
    });
};

initializeDropdown();
