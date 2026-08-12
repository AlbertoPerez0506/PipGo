/**
 * CERCA — App JavaScript
 * Navegación, animaciones e interacciones
 */

(function() {
    'use strict';

    // ============================================
    // DATOS DE LA APLICACIÓN
    // ============================================
    const products = {
        1: { name: 'Tomate criollo', price: '$35', unit: '/ kg', emoji: '🍅', distance: '0.8 km', producer: 'Rancho El Paraíso', rating: '4.8', reviews: 24, description: 'Tomate criollo fresco, cultivado sin químicos en Rancho El Paraíso. Cosechado esta mañana. Ideal para salsas y guisos. Sabor auténtico de huerto.', gradient: 'linear-gradient(145deg, #FF6B6B, #E63946)' },
        2: { name: 'Mango ataulfo', price: '$40', unit: '/ kg', emoji: '🥭', distance: '1.2 km', producer: 'Huerto Don Manuel', rating: '4.6', reviews: 18, description: 'Mango ataulfo dulce y jugoso, recién cosechado. Perfecto para postres o para disfrutar en fresco.', gradient: 'linear-gradient(145deg, #FFB347, #F59E00)' },
        3: { name: 'Huevo criollo', price: '$60', unit: '/ docena', emoji: '🥚', distance: '0.5 km', producer: 'Granja La Esperanza', rating: '4.9', reviews: 42, description: 'Huevo de gallina criolla, gallinas libres y alimentadas naturalmente. Sabor incomparable.', gradient: 'linear-gradient(145deg, #FFF5E1, #F5E6CA)' },
        4: { name: 'Miel orgánica', price: '$90', unit: '/ 500 ml', emoji: '🍯', distance: '2.5 km', producer: 'Apiario San Juan', rating: '5.0', reviews: 31, description: 'Miel 100% orgánica de abeja melipona y apis. Sin aditivos ni azúcares añadidos. Directa del panal.', gradient: 'linear-gradient(145deg, #FFC107, #FFA000)' },
        5: { name: 'Aguacate criollo', price: '$45', unit: '/ kg', emoji: '🥑', distance: '1.8 km', producer: 'Rancho El Paraíso', rating: '4.7', reviews: 15, description: 'Aguacate criollo maduro, cremoso y de excelente calidad. Ideal para guacamole fresco.', gradient: 'linear-gradient(145deg, #4CAF50, #2E7D32)' },
        6: { name: 'Queso fresco', price: '$50', unit: '/ 400 g', emoji: '🧀', distance: '0.9 km', producer: 'Quesería La Sierra', rating: '4.5', reviews: 22, description: 'Queso fresco artesanal elaborado con leche de vaca 100% natural. Suave y ligeramente salado.', gradient: 'linear-gradient(145deg, #FFF9E6, #F5F0DC)' }
    };

    const producers = {
        'Rancho El Paraíso': { name: 'Rancho El Paraíso', initials: 'RP', rating: '4.9', reviews: 32, products: 12, location: 'Emiliano Zapata, Tabasco', bio: 'Somos un rancho familiar dedicado al cultivo de tomate, aguacate y verduras de temporada. Sin pesticidas, con prácticas sustentables. Entrega directa del huerto a tu mesa.', gradient: 'linear-gradient(135deg, #4F9D69, #1F6B4F)' }
    };

    // ============================================
    // ESTADO DE LA APLICACIÓN
    // ============================================
    const state = {
        currentScreen: 'home',
        previousScreen: null,
        isDrawerOpen: false,
        isSearchOpen: false,
        favorites: new Set(),
        currentProductId: null,
        currentProducer: null,
        selectedMapMarker: null
    };

    // ============================================
    // ELEMENTOS DOM
    // ============================================
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const drawer = $('#drawerMenu');
    const drawerOverlay = $('#drawerOverlay');
    const menuBtn = $('#menuBtn');
    const drawerClose = $('#drawerClose');
    const searchBar = $('#searchBar');
    const searchOverlay = $('#searchOverlay');
    const searchInput = $('#searchInput');
    const searchCancel = $('#searchCancel');
    const locationSelector = $('#locationSelector');
    const heroCta = $('#heroCta');
    const toast = $('#toast');
    const toastMessage = $('#toastMessage');

    const screenHome = $('#screen-home');
    const screenProductDetail = $('#screen-product-detail');
    const screenProducer = $('#screen-producer');
    const screenMap = $('#screen-map');

    const productGrid = $('#productGrid');
    const detailBackBtn = $('#detailBackBtn');
    const detailFavBtn = $('#detailFavBtn');
    const producerCard = $('#producerCard');
    const producerBackBtn = $('#producerBackBtn');
    const mapBackBtn = $('#mapBackBtn');
    const mapContextCard = $('#mapContextCard');
    const contactCta = $('#contactCta');

    // ============================================
    // NAVEGACIÓN DE PANTALLAS
    // ============================================
    function showScreen(screenId, isSecondary = false) {
        const screens = $$('.screen');
        screens.forEach(screen => screen.classList.remove('active'));
        
        const targetScreen = $(`#screen-${screenId}`);
        if (targetScreen) {
            targetScreen.classList.add('active');
            state.previousScreen = state.currentScreen;
            state.currentScreen = screenId;
            
            // Scroll to top
            targetScreen.scrollTop = 0;
        }
        
        // Cerrar drawer si está abierto
        closeDrawer();
        closeSearch();
    }

    function goBack() {
        if (state.previousScreen) {
            showScreen(state.previousScreen);
        } else {
            showScreen('home');
        }
    }

    // ============================================
    // DRAWER LATERAL
    // ============================================
    function openDrawer() {
        state.isDrawerOpen = true;
        drawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Haptic feedback simulation via vibration
        if (navigator.vibrate) navigator.vibrate(10);
    }

    function closeDrawer() {
        state.isDrawerOpen = false;
        drawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDrawer();
    });

    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    // Navegación desde el drawer
    $$('.drawer-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetScreen = item.getAttribute('data-screen');
            
            // Marcar como activo
            $$('.drawer-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            switch(targetScreen) {
                case 'home':
                case 'explore':
                case 'categories':
                    showScreen('home');
                    break;
                case 'map':
                    showScreen('map', true);
                    break;
                case 'favorites':
                case 'my-posts':
                case 'messages':
                case 'sell':
                case 'profile':
                case 'settings':
                case 'logout':
                    // Simulación de screens futuras
                    showToast('Función disponible en la V2');
                    break;
                default:
                    showScreen('home');
            }
        });
    });

    // Cerrar drawer con gesto de swipe
    let drawerTouchStartX = 0;
    drawer.addEventListener('touchstart', (e) => {
        drawerTouchStartX = e.touches[0].clientX;
    });
    
    drawer.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].clientX - drawerTouchStartX;
        if (deltaX < -50) {
            closeDrawer();
        }
    });

    // ============================================
    // BÚSQUEDA
    // ============================================
    function openSearch() {
        state.isSearchOpen = true;
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Pequeño delay para que el input reciba foco correctamente
        setTimeout(() => {
            searchInput.focus();
        }, 350);
    }

    function closeSearch() {
        state.isSearchOpen = false;
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        searchInput.blur();
        searchInput.value = '';
    }

    searchBar.addEventListener('click', openSearch);
    searchCancel.addEventListener('click', closeSearch);

    // Búsqueda en tiempo real
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.trim().toLowerCase();
            if (query.length > 1) {
                performSearch(query);
            }
        }, 300);
    });

    function performSearch(query) {
        const results = Object.values(products).filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.producer.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            // Simular búsqueda exitosa
            const firstResult = results[0];
            closeSearch();
            
            // Encontrar el ID del producto
            const productId = Object.keys(products).find(key => 
                products[key].name === firstResult.name
            );
            
            if (productId) {
                setTimeout(() => {
                    openProductDetail(productId);
                }, 250);
            }
        }
    }

    // Búsqueda por chips
    $$('.search-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const text = chip.textContent.trim().split(' ')[0].toLowerCase();
            performSearch(text);
        });
    });

    // ============================================
    // SELECTOR DE UBICACIÓN
    // ============================================
    locationSelector.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        showToast('Selecciona tu ubicación');
        
        // Simular animación de carga
        locationSelector.style.opacity = '0.6';
        setTimeout(() => {
            locationSelector.style.opacity = '1';
        }, 600);
    });

    // ============================================
    // CATEGORÍAS
    // ============================================
    $$('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            $$('.category-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            if (navigator.vibrate) navigator.vibrate(8);
            
            // Simular scroll a productos
            const grid = $('#productGrid');
            if (grid) {
                grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============================================
    // HERO CTA
    // ============================================
    heroCta.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(10);
        const grid = $('#productGrid');
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // ============================================
    // TARJETAS DE PRODUCTO
    // ============================================
    $$('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Evitar que el click en favorito abra el detalle
            if (e.target.closest('.favorite-btn')) return;
            
            const productId = card.getAttribute('data-product-id');
            if (productId) {
                openProductDetail(productId);
            }
        });
    });

    function openProductDetail(productId) {
        state.currentProductId = productId;
        const product = products[productId];
        
        if (!product) return;
        
        // Actualizar contenido
        const detailImage = $('#detailImage');
        const detailEmoji = $('#detailEmoji');
        const detailName = $('#detailName');
        const detailPrice = $('#detailPrice');
        const detailUnit = $('#detailUnit');
        const detailDescription = $('#detailDescription');
        const detailProducerName = $('#detailProducerName');
        const detailProducerAvatar = $('#detailProducerAvatar');
        
        detailImage.style.background = product.gradient;
        detailEmoji.textContent = product.emoji;
        detailName.textContent = product.name;
        detailPrice.textContent = product.price;
        detailUnit.textContent = product.unit;
        detailDescription.textContent = product.description;
        detailProducerName.textContent = product.producer;
        
        // Actualizar rating
        const ratingContainer = $('.detail-rating');
        if (ratingContainer) {
            ratingContainer.innerHTML = `
                <span class="stars">★★★★★</span>
                <span class="rating-value">${product.rating}</span>
                <span class="rating-count">(${product.reviews} reseñas)</span>
            `;
        }
        
        // Actualizar meta del productor
        const producerMeta = $('.producer-meta');
        if (producerMeta) {
            producerMeta.innerHTML = `
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1C2.8 1 1 2.8 1 5C1 7.2 2.8 9 5 9C7.2 9 9 7.2 9 5C9 2.8 7.2 1 5 1Z" stroke="currentColor" stroke-width="1.2"/><circle cx="5" cy="5" r="1.2" fill="currentColor"/></svg>
                ${product.distance} · Emiliano Zapata
            `;
        }
        
        // Actualizar estado del favorito
        if (state.favorites.has(productId)) {
            detailFavBtn.classList.add('active');
            detailFavBtn.querySelector('svg').setAttribute('fill', '#D9534F');
            detailFavBtn.querySelector('svg').setAttribute('stroke', '#D9534F');
        } else {
            detailFavBtn.classList.remove('active');
            detailFavBtn.querySelector('svg').setAttribute('fill', 'none');
            detailFavBtn.querySelector('svg').setAttribute('stroke', 'currentColor');
        }
        
        // Guardar productor actual
        state.currentProducer = product.producer;
        
        showScreen('product-detail', true);
    }

    // ============================================
    // FAVORITOS
    // ============================================
    $$('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            const favId = btn.getAttribute('data-favorite') || state.currentProductId;
            
            if (state.favorites.has(favId)) {
                state.favorites.delete(favId);
                btn.classList.remove('active');
                btn.querySelector('svg').setAttribute('fill', 'none');
                btn.querySelector('svg').setAttribute('stroke', 'currentColor');
                showToast('Eliminado de favoritos');
            } else {
                state.favorites.add(favId);
                btn.classList.add('active');
                btn.querySelector('svg').setAttribute('fill', '#D9534F');
                btn.querySelector('svg').setAttribute('stroke', '#D9534F');
                showToast('¡Agregado a favoritos! ❤️');
            }
            
            if (navigator.vibrate) navigator.vibrate(12);
        });
    });

    // Favorito en detalle
    detailFavBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const productId = state.currentProductId;
        
        if (state.favorites.has(productId)) {
            state.favorites.delete(productId);
            detailFavBtn.classList.remove('active');
            detailFavBtn.querySelector('svg').setAttribute('fill', 'none');
            detailFavBtn.querySelector('svg').setAttribute('stroke', 'currentColor');
            showToast('Eliminado de favoritos');
        } else {
            state.favorites.add(productId);
            detailFavBtn.classList.add('active');
            detailFavBtn.querySelector('svg').setAttribute('fill', '#D9534F');
            detailFavBtn.querySelector('svg').setAttribute('stroke', '#D9534F');
            showToast('¡Agregado a favoritos! ❤️');
        }
        
        if (navigator.vibrate) navigator.vibrate(12);
    });

    // ============================================
    // BOTONES DE REGRESO
    // ============================================
    detailBackBtn.addEventListener('click', goBack);
    producerBackBtn.addEventListener('click', goBack);
    mapBackBtn.addEventListener('click', goBack);

    // ============================================
    // CARD DE PRODUCTOR → PERFIL
    // ============================================
    producerCard.addEventListener('click', () => {
        if (state.currentProducer) {
            openProducerProfile(state.currentProducer);
        }
    });

    // También desde el detalle
    $('#producerCard').addEventListener('click', openProducerFromDetail);

    function openProducerFromDetail() {
        if (state.currentProducer) {
            openProducerProfile(state.currentProducer);
        }
    }

    function openProducerProfile(producerName) {
        const producer = producers[producerName] || {
            name: producerName,
            initials: producerName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase(),
            rating: '4.8',
            reviews: 20,
            products: 10,
            location: 'Emiliano Zapata, Tabasco',
            bio: 'Productor local comprometido con la calidad y la frescura de sus productos.',
            gradient: 'linear-gradient(135deg, #4F9D69, #1F6B4F)'
        };
        
        // Actualizar contenido del perfil
        $('.producer-hero').style.background = 'linear-gradient(160deg, #4F9D69, #1F6B4F)';
        $('.producer-profile-avatar span').textContent = producer.initials;
        $('.producer-profile-name').textContent = producer.name;
        $('.producer-profile-rating span:last-child').textContent = `${producer.rating} · ${producer.reviews} reseñas`;
        $('.producer-profile-meta span:first-child').textContent = `📍 ${producer.location}`;
        $('.producer-profile-meta span:last-child').textContent = `${producer.products} productos activos`;
        $('.producer-profile-bio').textContent = producer.bio;
        
        showScreen('producer', true);
    }

    // ============================================
    // CTA DE CONTACTO
    // ============================================
    contactCta.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        
        // Animación de envío
        contactCta.textContent = 'Contactando...';
        contactCta.style.opacity = '0.7';
        
        setTimeout(() => {
            contactCta.textContent = 'Contactar productor';
            contactCta.style.opacity = '1';
            showToast('📞 Solicitud enviada');
        }, 1500);
    });

    // ============================================
    // MAPA
    // ============================================
    $$('.product-marker').forEach(marker => {
        marker.addEventListener('click', () => {
            // Quitar selección previa
            $$('.product-marker').forEach(m => m.classList.remove('selected'));
            marker.classList.add('selected');
            
            state.selectedMapMarker = marker;
            
            // Actualizar card contextual
            const markerId = marker.getAttribute('data-marker');
            const product = products[markerId];
            
            if (product) {
                const contextCard = $('#mapContextCard');
                contextCard.querySelector('.context-image').style.background = product.gradient;
                contextCard.querySelector('.context-image span').textContent = product.emoji;
                contextCard.querySelector('.context-info h4').textContent = product.name;
                contextCard.querySelector('.context-price').textContent = `${product.price} ${product.unit}`;
                contextCard.querySelector('.context-meta').textContent = `📍 ${product.distance} · ${product.producer}`;
                
                // Mostrar card con animación
                contextCard.style.display = 'flex';
                contextCard.style.animation = 'none';
                void contextCard.offsetWidth;
                contextCard.style.animation = 'contextCardUp 400ms cubic-bezier(0.34, 1.56, 0.64, 1) both';
            }
            
            if (navigator.vibrate) navigator.vibrate(10);
        });
    });

    // Click en card contextual del mapa
    mapContextCard.addEventListener('click', () => {
        if (state.selectedMapMarker) {
            const markerId = state.selectedMapMarker.getAttribute('data-marker');
            if (markerId && products[markerId]) {
                openProductDetail(markerId);
            }
        }
    });

    // ============================================
    // TOAST
    // ============================================
    let toastTimeout;
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }

    // ============================================
    // SWIPE PARA VOLVER (gesto iOS-like)
    // ============================================
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isSwiping = false;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        
        // Detectar swipe horizontal
        if (Math.abs(deltaX) > 60 && Math.abs(deltaY) < 30) {
            isSwiping = true;
        }
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;
        
        // Swipe desde la izquierda para abrir drawer en home
        if (deltaX > 80 && Math.abs(deltaY) < 40 && state.currentScreen === 'home' && !state.isDrawerOpen) {
            openDrawer();
        }
        
        // Swipe desde la derecha para volver en pantallas secundarias
        if (deltaX < -80 && Math.abs(deltaY) < 40 && state.currentScreen !== 'home' && !state.isDrawerOpen) {
            goBack();
        }
    }, { passive: true });

    // ============================================
    // TECLADO ESCAPE PARA VOLVER
    // ============================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (state.isDrawerOpen) {
                closeDrawer();
            } else if (state.isSearchOpen) {
                closeSearch();
            } else if (state.currentScreen !== 'home') {
                goBack();
            }
        }
        
        if (e.key === 'Backspace' && !searchInput.matches(':focus')) {
            // Android back button simulation
            if (state.currentScreen !== 'home') {
                goBack();
            }
        }
    });

    // ============================================
    // SIMULACIÓN DE BOTÓN BACK DE ANDROID
    // ============================================
    // Para Cordova, se integraría con el plugin de back button
    document.addEventListener('backbutton', (e) => {
        e.preventDefault();
        
        if (state.isDrawerOpen) {
            closeDrawer();
        } else if (state.isSearchOpen) {
            closeSearch();
        } else if (state.currentScreen !== 'home') {
            goBack();
        } else {
            // En home, mostrar confirmación de salida
            if (navigator.vibrate) navigator.vibrate([10, 50, 10]);
            showToast('Presiona otra vez para salir');
            
            // Para Cordova: navigator.app.exitApp();
        }
    }, false);

    // ============================================
    // AVATAR DE PERFIL → Clic
    // ============================================
    document.getElementById('avatarBtn').addEventListener('click', () => {
        showToast('Mi perfil');
    });

    // ============================================
    // INICIALIZACIÓN
    // ============================================
    function init() {
        console.log('CERCA — Aplicación inicializada');
        console.log(`Pantalla activa: ${state.currentScreen}`);
        
        // Aplicar animación de entrada inicial
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 400ms ease-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
        
        // Precargar imágenes (en este caso los gradientes ya están en CSS)
        
        // Si hay parámetros de URL (para Cordova deep linking)
        const params = new URLSearchParams(window.location.search);
        if (params.get('product')) {
            const productId = params.get('product');
            if (products[productId]) {
                setTimeout(() => openProductDetail(productId), 500);
            }
        }
    }

    // Iniciar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Exponer funciones para debugging
    window.CERCA = {
        state,
        products,
        producers,
        openProductDetail,
        openProducerProfile,
        showScreen,
        goBack,
        showToast,
        openDrawer,
        closeDrawer
    };

})();