import requests
import pytest
from typing import List, Dict, Any

API_URL = "https://fakestoreapi.com/products"

def get_products() -> List[Dict[str, Any]]:
    """Fetch products from the API"""
    response = requests.get(API_URL)
    return response.json()

def test_api_response_code():
    """Test if the API returns 200 status code"""
    response = requests.get(API_URL)
    assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"

def test_product_attributes():
    """Test product attributes for defects"""
    products = get_products()
    defective_products = []

    for product in products:
        defects = []
        
        # Check title
        if not product.get('title'):
            defects.append("Empty title")
        
        # Check price
        if product.get('price', 0) < 0:
            defects.append("Negative price")
        
        # Check rating
        rating = product.get('rating', {})
        if rating.get('rate', 0) > 5:
            defects.append("Rating exceeds 5")
        
        if defects:
            defective_products.append({
                'id': product.get('id'),
                'title': product.get('title'),
                'defects': defects
            })
    
    # Print defective products
    if defective_products:
        print("\nDefective Products Found:")
        for product in defective_products:
            print(f"\nProduct ID: {product['id']}")
            print(f"Title: {product['title']}")
            print("Defects:", ", ".join(product['defects']))
    
    # Assert that we found no defects
    assert not defective_products, f"Found {len(defective_products)} products with defects"

if __name__ == "__main__":
    pytest.main([__file__, "-v"]) 