import { renderBlock } from './lib.js'

export function renderUserBlock (userName, avatarLink, favoriteItemsAmount) {
  const favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

  renderBlock(
    'user-block',
    `
      <div class="header-container">
        <img class="avatar" src="${avatarLink}" alt="Wade Warren" />
        <div class="info">
            <p class="name">${userName}</p>
            <p class="fav">
              <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
            </p>
        </div>
      </div>
    `
  )
}
